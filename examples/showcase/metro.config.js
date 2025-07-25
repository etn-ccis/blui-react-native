// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const {getDefaultConfig} = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [
  require('node:path').resolve(__dirname, '..'),
  require('node:path').resolve(
    __dirname,
    './watchPackages/@brightlayer-ui/react-native-components',
  ),
];

config.resolver = {
  ...config.resolver,
  alias: {
    '@brightlayer-ui/react-native-components': path.resolve(
      __dirname,
      './watchPackages/@brightlayer-ui/react-native-components',
    ),
    '@brightlayer-ui/react-native-themes': path.resolve(
      __dirname,
      './watchPackages/@brightlayer-ui/react-native-themes',
    ),
  },
  nodeModulesPaths: [
    path.resolve(__dirname, './watchPackages'),
    path.resolve(projectRoot, 'node_modules'),
  ],
};

module.exports = config;
