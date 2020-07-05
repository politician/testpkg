const pkg = require('./package.json')

console.log(pkg.files)

module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: pkg.files,
      },
    ],
  ],
}
