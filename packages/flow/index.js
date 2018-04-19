module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    'plugin:flowtype/recommended',
  ],
  plugins: [
    require.resolve('eslint-plugin-flowtype'),
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
    ],
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  rules: {
    'flowtype/define-flow-type': 1,
    'flowtype/space-before-type-colon': [
      1,
      'never',
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    'flowtype/type-id-match': [
      2,
      '^([A-Z]+[a-z0-9A-Z]*)$',
    ],
    'space-infix-ops': 0,
    'no-duplicate-imports': 0,
    'import/no-duplicates': 1,
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],
  },
};
