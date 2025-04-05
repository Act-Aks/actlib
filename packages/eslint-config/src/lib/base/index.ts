import eslint from '@eslint/js'
import promisePlugin from 'eslint-plugin-promise'
import { ConfigArray } from 'typescript-eslint'

import { baseTypescript } from './baseTypescript'
import { customImport } from './customImport'
import { customPromise } from './customPromise'
import { ignorePaths } from './ignorePaths'
import { noNullAssertionForSpecs } from './noNullAssertionForSpecs'
import { noRelativeImportPaths } from './noRelativeImportPaths'
import { specOnly } from './specOnly'

export const baseEslintConfig: ConfigArray = [
    ignorePaths,
    promisePlugin.configs['flat/recommended'],
    eslint.configs.recommended,
    baseTypescript,
    noRelativeImportPaths,
    specOnly,
    customImport,
    customPromise,
    noNullAssertionForSpecs,
] satisfies ConfigArray
