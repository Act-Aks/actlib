import { FlatCompat } from '@eslint/eslintrc'
import { ConfigArray } from 'typescript-eslint'

import { customReact } from './customReact'
import { noDefaultReactImportInSpecs } from './noDefaultReactImportInSpecs'

const compat = new FlatCompat()

export const reactEslintConfig: ConfigArray = [
    ...compat.extends('plugin:react-hooks/recommended'),
    customReact,
    noDefaultReactImportInSpecs,
]
