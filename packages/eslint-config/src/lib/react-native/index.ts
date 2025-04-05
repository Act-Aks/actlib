import rnPlugin from 'eslint-plugin-react-native'
import { ConfigArray } from 'typescript-eslint'

import { LINT_GLOBALS } from '../constants'
import { reactEslintConfig } from '../react'

export const reactNativeEslintConfig: ConfigArray = [
    ...reactEslintConfig,
    {
        files: LINT_GLOBALS.code,
        name: 'Custom react-native rules',
        plugins: {
            'react-native': rnPlugin,
        },
        rules: {
            'react-native/no-color-literals': 'error',
            'react-native/no-inline-styles': 'off',
            'react-native/no-raw-text': 'off',
            'react-native/no-single-element-style-arrays': 'error',
            'react-native/no-unused-styles': 'error',
            'react-native/sort-styles': 'error',
            'react-native/split-platform-components': 'off',
        },
    },
]
