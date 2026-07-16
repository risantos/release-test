import type { Config } from 'release-it';

export default {
  git: {
    commit: true,
    changelog: 'echo "## Changelog\\n\\n$(npx @uphold/github-changelog-generator -f unreleased | tail -n +4 -f)"',
    commitMessage: 'Release `v${version}`',
    push: false,
    requireCommits: true,
    requireUpstream: false,
    tag: false
  },
  github: {
    release: false
  },
  hooks: {
    'after:bump': `
      printf "%s\n%s\n" "$(npx @uphold/github-changelog-generator -f v\${version})" "$(test -f CHANGELOG.md && tail -n +2 CHANGELOG.md || true)" > CHANGELOG.md &&
      git add CHANGELOG.md --all
    `
  }
} satisfies Config;
