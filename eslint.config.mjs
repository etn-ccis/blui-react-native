import bluiRecommended from '@brightlayer-ui/eslint-config';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    ...bluiRecommended,
    {
        ignores: [
            'dist',
            'docs/dist/**/**',
            'packages/**/dist/**',
            'examples/showcase-expo/app/**',
            'examples/showcase-expo/.expo/**',
            'examples/**/watchPackages/**',
        ],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/no-redundant-type-constituents': 'off',
        },
    },
    {
        files: ['packages/blui-react-native-workflows/**/*.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
            'react/display-name': 'off',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                },
                {
                    selector: 'property',
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                },
                {
                    selector: 'property',
                    format: null,
                    modifiers: ['requiresQuotes'],
                },
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE'],
                },
                {
                    selector: 'parameter',
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: 'memberLike',
                    modifiers: ['private'],
                    format: ['camelCase'],
                    leadingUnderscore: 'require',
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
                {
                    selector: 'import',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'PascalCase'],
                    leadingUnderscore: 'allow',
                },
            ],
        },
    },
    {
        files: ['packages/blui-react-native-component-library/**/*.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
    {
        files: ['packages/blui-react-native-cli-templates/**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
            'no-empty-function': 'off',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: [
                        'classProperty',
                        'objectLiteralProperty',
                        'typeProperty',
                        'classMethod',
                        'objectLiteralMethod',
                        'typeMethod',
                        'accessor',
                        'enumMember',
                    ],
                    format: null,
                    modifiers: ['requiresQuotes'],
                },
            ],
        },
    },
    {
        files: ['docs/**/*.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
        },
    },
    {
        files: ['examples/designPatterns/**/*.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            'arrow-parens': 'off',
        },
    },
    {
        files: ['examples/showcase/**/*.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            'arrow-parens': 'off',
            'no-console': 'off',
        },
    },
    {
        files: ['examples/showcase-expo/**/*.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            'arrow-parens': 'off',
            'no-console': 'off',
        },
    },
];
