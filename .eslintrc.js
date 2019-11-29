const prettierConfig = require('./.prettierrc')

module.exports = {
  extends: ['wesbos'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'no-lonely-if': 0,
    'max-classes-per-file': 0,
    'prefer-destructuring': 0,
    'no-unused-vars': 0,
    noshadow: 0,
    'no-constant-condition': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
}
