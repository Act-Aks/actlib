import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import importPlugin from 'eslint-plugin-import'

import { LINT_GLOBALS } from '../constants'

export const customImport: FlatConfig.Config = {
    name: 'Custom import rules',
    files: LINT_GLOBALS.code,
    plugins: {
        import: importPlugin,
    },
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    rules: {
        'import/no-unresolved': 'off',
    },
}
