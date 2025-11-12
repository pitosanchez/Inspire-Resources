module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: { version: '18.2' },
        tailwindcss: {
            callees: ['clsx', 'cn'],
            config: 'tailwind.config.js',
        },
    },
    plugins: ['react-refresh', 'tailwindcss'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/prop-types': 'off',
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/no-contradicting-classname': 'error',
    },
}


