import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

import { LINT_GLOBALS } from '../constants'

export const noNullAssertionForSpecs: FlatConfig.Config = {
    name: 'Deactivate no-non-null-assertion for spec files',
    files: LINT_GLOBALS.spec,
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
}
