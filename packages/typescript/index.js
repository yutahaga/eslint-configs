module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser')
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    strict: 'off'
  }
}
