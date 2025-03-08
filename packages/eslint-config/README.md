# @act-aks/eslint-config

A shared ESLint configuration package that provides a comprehensive set of rules for TypeScript projects. This configuration is designed to enforce consistent code style and catch potential errors early in development.

## Features

### TypeScript-First Configuration

- Strict type checking and validation
- Proper handling of TypeScript-specific patterns
- Smart type inference rules
- Consistent type imports/exports
- No unsafe type assertions
- Proper promise typing
- Exhaustive switch statements

### Code Quality Rules

- Comprehensive error prevention
- Best practices enforcement
- Memory leak prevention
- Proper promise handling
- Consistent error handling
- No unused variables/imports
- Proper async/await usage

### Style Enforcement

- Import/Export sorting and organization
    - Sorted imports by groups
    - No duplicate imports
    - Proper module resolution
    - Consistent path aliases
- Naming Conventions
    - camelCase for variables and functions
    - PascalCase for classes and types
    - UPPER_CASE for constants
- File Organization
    - Consistent file naming
    - Proper test file naming (.spec.ts)
    - Directory structure rules

## Installation

```bash
yarn add -D @act-aks/eslint-config
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import eslintConfig from '@act-aks/eslint-config'

export default [...eslintConfig]
```

## Rule Sets

### Core Rules

- `no-unused-vars`: Prevents unused variable declarations
- `no-console`: Disallows console.log statements
- `no-alert`: Prevents alert/confirm/prompt usage
- `curly`: Enforces consistent brace style
- `eqeqeq`: Requires === and !==

### TypeScript Rules

- `@typescript-eslint/no-explicit-any`: Prevents any type usage
- `@typescript-eslint/explicit-function-return-type`: Optional return type declarations
- `@typescript-eslint/no-unused-vars`: TypeScript-aware unused variable checks
- `@typescript-eslint/no-non-null-assertion`: Prevents non-null assertions

### Import Rules

- Sort imports by groups:
    1. Third-party modules
    2. Internal modules
    3. Relative imports
- Enforce newlines between import groups
- Prevent duplicate imports
- Sort import specifiers alphabetically

### Promise Rules

- `promise/prefer-await-to-then`: Prefer async/await over .then()
- `promise/prefer-await-to-callbacks`: Prefer async/await over callbacks
- Proper error handling in async operations

### File Naming Rules

- Test files must use .spec.ts extension
- Consistent casing across filenames
- Directory structure validation

## Editor Integration

For the best development experience, ensure your editor has ESLint integration installed:

- VS Code: ESLint extension
- WebStorm: Built-in ESLint support
- Vim/Neovim: ALE or similar plugin

## Contributing

1. Clone the repository
2. Install dependencies: `yarn install`
3. Build the package: `nx build eslint-config`
4. Run tests: `nx test eslint-config`

## License

MIT
