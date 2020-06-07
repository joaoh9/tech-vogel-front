module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [ 'plugin:vue/essential', 'eslint:recommended' ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [ 'warn', { code: 120, tabWidth: 2, ignoreStrings: true ,  ignoreComments: true , ignoreUrls: true, ignoreRegExpLiterals: true  ,  ignoreTemplateLiterals: true } ],
    'eqeqeq': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-classes-per-file': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multi-spaces': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'array-bracket-spacing': [ process.env.NODE_ENV === 'production' ? 'warn' : 'error', 'always' , {'singleValue': false} ],
    'comma-dangle': [ 'error' , 'always-multiline' ],
    'comma-style': [ 'error', 'last' ],
    'eol-last': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    // 'indent': [ 'error', 2 ],
    'key-spacing': [ 'error', { 'beforeColon': false,  'afterColon': true } ],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'quotes': [ process.env.NODE_ENV === 'production' ? 'warn' : 'error', 'single' ],
    'space-infix-ops': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'indent': [ 'error', 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 , 'MemberExpression': 1, 'ArrayExpression': 1, 'ObjectExpression': 1, 'ImportDeclaration': 1, 'flatTernaryExpressions': true,  'ignoreComments': false } ],
  },
};
