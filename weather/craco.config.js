const aliases = require('./aliases');

module.exports = {
  webpack: {
    alias: aliases,
  },
  jest: {
    configure: (jestConfig) => {
      jestConfig.moduleNameMapper = {
        ...jestConfig.moduleNameMapper,
        ...aliases,
      };
      return jestConfig;
    },
  },
};