module.exports = {
  parserOptions: {
    parser: require.resolve('typescript-eslint-parser'),
  },
  extends: [
    require.resolve('eslint-config-airbnb-base'),
  ],
  plugins: [
    'typescript',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-duplicates': 1,
    'import/no-extraneous-dependencies': 0,
    'no-duplicate-imports': 0,
    'space-infix-ops': 0,
    'typescript/no-type-alias': {
      allowAliases: 'in-unions-and-intersections',
      allowCallbacks: true,
      allowLiterals: 'in-unions-and-intersections',
      allowMappedTypes: 'in-unions-and-intersections',
    },
    'typescript/no-unused-vars': 'warn',
  },
};
