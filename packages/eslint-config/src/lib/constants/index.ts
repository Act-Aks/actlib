import type { Linter } from 'eslint'

export const LINT_GLOBALS = {
    all: ['*'],
    code: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx', '**/*.mts'],
    jsOnly: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    json: ['**/*.json'],
    spec: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    tsOnly: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    jsxTsx: ['**/*.jsx', '**/*.tsx'],
    ignore: ['**/node_modules', '**/tmp', '**/.idea', '**/.vscode', '**/.yarn', '**/dist', '**/*.config.cjs'],
} satisfies Record<string, string[]>

export const namingConvention = [
    'error',
    { format: ['PascalCase'], selector: 'typeLike' },
    { format: ['UPPER_CASE'], selector: 'enumMember' },
    { format: ['UPPER_CASE', 'camelCase'], modifiers: ['readonly'], selector: 'classProperty' },
    { format: ['UPPER_CASE'], modifiers: ['static', 'readonly'], selector: 'classProperty' },
    { format: null, selector: 'typeProperty' },
    { format: null, selector: 'objectLiteralProperty' },
    { format: ['PascalCase', 'UPPER_CASE'], selector: 'typeAlias' },
] satisfies Linter.RuleEntry
