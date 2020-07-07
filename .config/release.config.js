// Import your custom convention configuration
const convention = require(__dirname + '/commit-convention.json')

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
  type: sentenceCase(name, false),
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
        presetConfig: { types: logSections },
      },
    ],
    ['@semantic-release/npm', { tarballDir: '.latest' }],
    [
      '@semantic-release/exec',
      {
        publish: 'ls .latest',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: '.latest/*-*.tgz',
            label: 'Release ${nextRelease.gitTag}',
          },
        ],
      },
    ],
  ],
}
