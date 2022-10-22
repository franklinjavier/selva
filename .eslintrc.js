module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-selva`
  extends: ['@franklinjavier/selva'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
