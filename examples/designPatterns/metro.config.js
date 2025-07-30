const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const projectRoot = __dirname;

const config = {};

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

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(getDefaultConfig(__dirname), config),
);
