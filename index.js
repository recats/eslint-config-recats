module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['flowtype', 'jest', 'react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'react/no-danger': [0],
    'linebreak-style': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'import/extensions': 'off',
    'react/destructuring-assignment': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/__tests__/**'] },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    targets: ['chrome >= 50', 'firefox', 'edge', 'ie >= 9', 'safari >= 9'],
    compiler: 'babel',
  },
  globals: {
    document: true,
    window: true,
  },
};
