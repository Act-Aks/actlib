import reactHooks from 'eslint-plugin-react-hooks'
import { ConfigArray } from 'typescript-eslint'

import { customReact } from './customReact'
import { noDefaultReactImportInSpecs } from './noDefaultReactImportInSpecs'

export const reactEslintConfig: ConfigArray = [
    reactHooks.configs['recommended-latest'],
    customReact,
    noDefaultReactImportInSpecs,
]
