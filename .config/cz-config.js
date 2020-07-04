/**
 * Configuration options:
 * https://github.com/leonardoanalista/cz-customizable#options
 * https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js
 */

// Enforce uppercase for each type's first letter (change to false to enforce lower case)
const startCase = (str, uppercase = true) =>
  str.replace(/^./, uppercase ? str[0].toUpperCase() : str[0].toLowerCase())

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     A new feature',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'style',
      name: `style:    Changes that do not affect the meaning of the code
            (white-space, formatting, missing semi-colons, etc)`,
    },
    {
      value: 'refactor',
      name:
        'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests',
    },
    {
      value: 'chore',
      name: `chore:    Changes to the build process or auxiliary tools
            and libraries such as documentation generation`,
    },
  ].map(({ value, name }) => ({
    value: startCase(value),
    name: startCase(name),
  })),

  // If your project gets bigger, it is recommended to add pre-defined scopes
  scopes: [
    // 'billing',
  ].map((name) => ({ name })),

  // You can override scopes for some types
  scopeOverrides: {
    // feat: ['billing', 'dashboard'],
    // fix: [],
    // docs: [],
    // style: [],
    // refactor: [],
    // perf: [],
    // test: [],
    // chore: ['build', 'ci'],
  },

  // Allow scopes not in scopes or scopeOverrides
  allowCustomScopes: true,

  // When you're ready to use scopes, do not skip the scope question!
  skipQuestions: ['scope'],

  // Types that can contain breaking changes
  allowBreakingChanges: ['feat', 'fix', 'perf'],

  // Enforce uppercase for the subject's first letter (change to false to enforce lower case)
  upperCaseSubject: true,
}
