import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

import { LINT_GLOBALS } from '../constants'

export const noDefaultReactImportInSpecs: FlatConfig.Config = {
    name: 'Default React import not allowed in spec files',
    files: LINT_GLOBALS.spec,
    rules: {
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
    },
}
