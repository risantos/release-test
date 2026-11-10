import type { Config } from 'release-it';

export default {
  git: {
    commit: true,
    commitArgs: ['-S'],
    commitMessage: 'Release `v${version}`',
    push: false,
    pushArgs: ['--signed'],
    requireCommits: true,
    requireUpstream: false,
    tag: true,
    tagArgs: ['-s'],
    tagName: 'v${version}'
  },
  github: {
    autoGenerate: true,
    comments: {
      submit: true,
      pr: 'Published on Release `v${version}`'
    },
    release: true,
    releaseName: 'v${version}',
    tokenRef: 'GITHUB_TOKEN'
  },
  npm: {
    publish: false,
    skipChecks: true
  }
} satisfies Config;
