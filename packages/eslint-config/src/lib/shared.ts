import type { Linter } from 'eslint'

export const sharedNamingConvention = [
    'error',
    { format: ['PascalCase'], selector: 'typeLike' },
    { format: ['UPPER_CASE'], selector: 'enumMember' },
    { format: ['UPPER_CASE', 'camelCase'], modifiers: ['readonly'], selector: 'classProperty' },
    { format: ['UPPER_CASE'], modifiers: ['static', 'readonly'], selector: 'classProperty' },
    { format: null, selector: 'typeProperty' },
    { format: null, selector: 'objectLiteralProperty' },
    { format: ['PascalCase', 'UPPER_CASE'], selector: 'typeAlias' },
] satisfies Linter.RuleEntry
