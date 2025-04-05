import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths'

import { LINT_GLOBALS } from '../constants'

export const noRelativeImportPaths: FlatConfig.Config = {
    name: 'Custom no relative import paths',
    files: LINT_GLOBALS.code,
    plugins: {
        'no-relative-import-paths': noRelativeImportPathsPlugin,
    },
    rules: {
        'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true, prefix: '@' }],
    },
}
