module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        'no-console': ['warn', { allow: ['error'] }],
        'capitalized-comments': [
            'error',
            'always',
            {
                ignorePattern: 'console',
            },
        ],
        'vue/multi-word-component-names': 'off',
    },
}
