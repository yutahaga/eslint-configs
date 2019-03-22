module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('@yutahaga/eslint-config-standard/prettier'),
    require.resolve('@yutahaga/eslint-config-react/prettier'),
    require.resolve('@yutahaga/eslint-config-typescript/prettier'),
    require.resolve('@yutahaga/eslint-config-prettier')
  ]
}
