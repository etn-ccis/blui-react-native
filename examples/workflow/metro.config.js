const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [require('node:path').resolve(__dirname, '..')];

config.resolver.nodeModulesPaths = [path.resolve(projectRoot, 'node_modules')];

config.resolver.unstable_enableSymlinks = true;
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
