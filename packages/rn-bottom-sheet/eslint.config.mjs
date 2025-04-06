import baseConfig from '../../eslint.config.mjs'

export default [
    ...baseConfig,
    {
        files: ['**/*.json'],
        languageOptions: {
            parser: await import('jsonc-eslint-parser'),
        },
        rules: {
            '@nx/dependency-checks': [
                'error',
                {
                    ignoredFiles: [
                        '{projectRoot}/eslint.config.{js,cjs,mjs}',
                        '{projectRoot}/rollup.config.{js,ts,mjs,mts,cjs,cts}',
                    ],
                },
            ],
        },
    },
]
