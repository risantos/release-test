import type { Config } from 'release-it';

export default {
  git: {
    commit: false,
    push: false,
    requireUpstream: false,
    tag: false
  },
  npm: {
    skipChecks: true
  }
} satisfies Config;
