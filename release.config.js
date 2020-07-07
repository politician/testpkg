// Import your custom convention configuration
const convention = require('./.config/commit-convention.json')

// Enforce convention's sentence case settings
const sentenceCase = (str, sentenceCase = true) =>
  str.replace(/^./, sentenceCase ? str[0].toUpperCase() : str[0].toLowerCase())

// Release rules for each type
const releaseRules = convention.types.map(({ name, releaseType }) => ({
  type: sentenceCase(name, convention.sentenceCase.type),
  release: releaseType || false,
}))

// Changelog sections for each type
const logSections = convention.types.map(({ name, logSection }) => ({
  type: sentenceCase(name, convention.sentenceCase.type),
  section: logSection,
  hidden: logSection ? false : true,
}))

module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: logSections,
          header: 'okkkk',
        },
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'yarn pack',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: '*-v*.tgz',
            label: 'Release ${nextRelease.gitTag}',
          },
        ],
      },
    ],
  ],
}
