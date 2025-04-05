import { ConfigArray } from 'typescript-eslint'

import { baseEslintConfig } from './base'
import { reactEslintConfig } from './react'
import { reactNativeEslintConfig } from './react-native'

export const configs: Record<'react' | 'reactNative' | 'recommended', ConfigArray> = {
    react: reactEslintConfig,
    reactNative: reactNativeEslintConfig,
    recommended: baseEslintConfig,
}

export * from './constants'
