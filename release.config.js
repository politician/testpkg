const pkg = require('./package.json')

console.log(pkg.files)

module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'Fix', release: 'patch' },
          { type: 'Fix', scope: 'core-*', release: 'minor' },
          { type: 'Chore', release: 'patch' },
          { scope: 'no-release', release: false },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
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
        assets: ['*.tgz'],
      },
    ],
  ],
}
