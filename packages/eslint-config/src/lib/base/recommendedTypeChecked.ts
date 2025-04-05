import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import tseslint from 'typescript-eslint'

import { LINT_GLOBALS } from '../constants'

export const recommendedTypeChecked: FlatConfig.Config = {
    name: 'Recommended rules for type-checked code',
    files: LINT_GLOBALS.code,
    plugins: {
        '@typescript-eslint': tseslint.plugin,
    },
    rules: {
        ...tseslint.configs.recommendedTypeChecked.find(
            ({ name }) => name === 'typescript-eslint/recommended-type-checked',
        )?.rules,
    },
}
