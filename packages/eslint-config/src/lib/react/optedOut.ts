import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

import { LINT_GLOBALS } from '../constants'

export const optedOut: FlatConfig.Config = {
    name: 'Opt-outs of base rules',
    files: LINT_GLOBALS.code,
    rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        importNames: ['default'],
                        message: 'Default React import not allowed',
                        name: 'react',
                    },
                ],
            },
        ],
        'no-restricted-imports': 'off',
    },
}
