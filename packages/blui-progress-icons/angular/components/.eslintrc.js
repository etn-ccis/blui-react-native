module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['@brightlayer-ui/eslint-config/ts'],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
    },
    rules:
    {
        '@typescript-eslint/no-unused-vars': 'off'
    }
};
