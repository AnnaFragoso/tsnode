module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  // eslint-disable-next-line no-dupe-keys
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
