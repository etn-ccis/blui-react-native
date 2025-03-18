import bluiRecommended from '@brightlayer-ui/eslint-config';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    ...bluiRecommended,
    { ignores: ['dist','docs/dist/**/**'] },
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
            '@typescript-eslint/prefer-nullish-coalescing':'off',
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
];
