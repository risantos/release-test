import type { Config } from 'release-it';

export default {
  git: {
    commit: false,
    push: false,
    requireUpstream: false,
    tag: false,
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
    publish: false
  }
} satisfies Config;
