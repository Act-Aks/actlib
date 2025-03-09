import * as fs from 'fs-extra'
import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release'
import { VersionData } from 'nx/src/command-line/release/version'
import * as path from 'path'

async function copyPackagesToBuild() {
    const buildDir = path.join(process.cwd(), 'build')
    const packagesDir = path.join(process.cwd(), 'packages')

    // Remove build directory if it exists and create it fresh
    await fs.remove(buildDir)
    await fs.ensureDir(buildDir)
    await fs.ensureDir(path.join(buildDir, 'packages'))

    // Get all package directories
    const packageDirs = await fs.readdir(packagesDir)

    // Copy each package directory
    for (const pkg of packageDirs) {
        const srcDir = path.join(packagesDir, pkg)
        const destDir = path.join(buildDir, 'packages', pkg)

        // Only copy if it's a directory
        const stats = await fs.stat(srcDir)
        if (!stats.isDirectory()) continue

        await fs.copy(srcDir, destDir, {
            filter: src => {
                // Skip node_modules, test files, and dist folders
                return !src.includes('node_modules') && !src.includes('__tests__')
            },
        })
    }
}

async function copyChangelogFiles() {
    const buildDir = path.join(process.cwd(), 'build')
    const packagesDir = path.join(process.cwd(), 'packages')
    const packageDirs = await fs.readdir(packagesDir)

    for (const pkg of packageDirs) {
        const srcChangelogPath = path.join(packagesDir, pkg, 'CHANGELOG.md')
        const destChangelogPath = path.join(buildDir, 'packages', pkg, 'CHANGELOG.md')

        if (await fs.pathExists(srcChangelogPath)) {
            await fs.copy(srcChangelogPath, destChangelogPath)
        }
    }
}

function getPackageName(scopedPackageName: string): string {
    /* Could be a scoped package name */
    // const regex = /^@[^/]+\/(.*)$/
    // const match = scopedPackageName.match(regex)
    // return match[1]
    return scopedPackageName.split('/').pop() || ''
}

async function updatePackageJsonVersionsWhenNoNewVersionsReleased(projectsVersionData: VersionData) {
    const buildDir = path.join(process.cwd(), 'build')
    for (const projectName in projectsVersionData) {
        const projectVersionData = projectsVersionData[projectName]
        const packageName = getPackageName(projectName)
        if (projectVersionData.newVersion === null) {
            const packageJsonPath = path.join(buildDir, 'packages', packageName, 'package.json')
            const packageJson = await fs.readJson(packageJsonPath)
            packageJson.version = projectVersionData.currentVersion
            await fs.writeJson(packageJsonPath, packageJson, { spaces: 4 })
            console.log(`Updated package.json version for ${projectName} to ${projectVersionData.currentVersion}`)
        }
    }
}

;(async () => {
    await copyPackagesToBuild()

    const { workspaceVersion, projectsVersionData } = await releaseVersion({})

    await releaseChangelog({
        versionData: projectsVersionData,
        version: workspaceVersion,
    })

    await copyChangelogFiles()

    /* NOTE(Temp solution): This function updates the package.json versions when no new versions are released.
     * Mainly because the "releasePublish" method updates the dist-tag of the packages and does it
     * automatically such that older version is set as latest... This is avoid it!
     */
    await updatePackageJsonVersionsWhenNoNewVersionsReleased(projectsVersionData)

    const publishResult = await releasePublish({
        registry: 'https://registry.npmjs.org/',
        access: 'public',
    })

    process.exit(Object.values(publishResult).every(result => result.code === 0) ? 0 : 1)
})()
