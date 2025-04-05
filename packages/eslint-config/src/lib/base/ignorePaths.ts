import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

import { LINT_GLOBALS } from '../constants'

export const ignorePaths: FlatConfig.Config = {
    name: 'Global ignore paths',
    ignores: LINT_GLOBALS.ignore,
}
