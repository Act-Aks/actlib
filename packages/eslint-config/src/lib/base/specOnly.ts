import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import checkFilePlugin from 'eslint-plugin-check-file'

import { LINT_GLOBALS } from '../constants'

export const specOnly: FlatConfig.Config = {
    name: 'Enforce .spec-only filenames',
    files: LINT_GLOBALS.all,
    plugins: {
        'check-file': checkFilePlugin,
    },
    rules: {
        'check-file/filename-blocklist': ['error', { '**/*.test.ts': '*.spec.ts', '**/*.test.tsx': '*.spec.tsx' }],
    },
}
