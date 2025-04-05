import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import promisePlugin from 'eslint-plugin-promise'

import { LINT_GLOBALS } from '../constants'

export const customPromise: FlatConfig.Config = {
    name: 'Custom promise rules',
    files: LINT_GLOBALS.code,
    plugins: {
        promise: promisePlugin,
    },
    ...promisePlugin.configs['flat/recommended'],
    rules: {
        'promise/prefer-await-to-callbacks': 'error',
        'promise/prefer-await-to-then': 'error',
    },
}
