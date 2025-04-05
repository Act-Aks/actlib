import { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import reactPlugin from 'eslint-plugin-react'

import { LINT_GLOBALS } from '../constants'

export const customReact: FlatConfig.Config = {
    name: 'Custom rules for React',
    files: LINT_GLOBALS.code,
    ...reactPlugin.configs.flat['recommended'],
    plugins: {
        ...reactPlugin.configs.flat['recommended']?.plugins,
    },
    rules: {
        ...reactPlugin.configs.flat['recommended']?.rules,
        'react/boolean-prop-naming': 'error',
        'react/display-name': 'off',
        'react/jsx-boolean-value': 'error',
        'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'always' }],
        'react/jsx-fragments': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-uses-react': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks:
                    '^useAppSidebar$|^useFormNavigation$|^useHeaderBanner$|^useHeaderBar$|^useLayoutType$|^useLocalStorage$|^useLocalStorageState$|^useNavigator$|^useDeepCompareEffect$|^useDeepCompareCallback$|^useDeepCompareMemo$',
            },
        ],
        '@typescript-eslint/no-floating-promises': [
            'error',
            {
                allowForKnownSafeCalls: [{ from: 'package', name: 'NavigateFunction', package: 'react-router' }],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
