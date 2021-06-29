module.exports = {
    'env': {
        'browser': true,
        'node': true
    },
    'extends': [
        'eslint:all',
        'eslint:recommended',
        'plugin:vue/strongly-recommended'
    ],
    'parserOptions': {
        'parser': '@babel/eslint-parser',
        'requireConfigFile': false
    },
    // Required to lint *.vue files
    'plugins': [
        'vue',
        'sort-keys-fix'
    ],

    'root': true,
    // Add your custom rules here
    'rules': {
        'max-len': ['off'],
        'no-console': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'sort-keys-fix/sort-keys-fix': 'warn',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': [
            'error',
            {
                'html': {
                    'component': 'always',
                    'normal': 'never',
                    'void': 'always'
                }
            }
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off'
    }
}

