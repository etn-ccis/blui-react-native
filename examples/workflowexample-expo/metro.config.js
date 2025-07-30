const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [
    monorepoRoot,
    require('node:path').resolve(__dirname, './watchPackages/@brightlayer-ui/react-native-auth-workflow'),
];

config.resolver = {
    ...config.resolver,
    alias: {
        '@brightlayer-ui/react-native-auth-workflow': path.resolve(
            __dirname,
            './watchPackages/@brightlayer-ui/react-native-auth-workflow'
        ),
    },
    nodeModulesPaths: [path.resolve(__dirname, './watchPackages'), path.resolve(projectRoot, 'node_modules')],
};
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
    path.resolve(__dirname, './watchPackages'),
];

module.exports = config;
