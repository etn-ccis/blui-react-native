const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [
    require('node:path').resolve(__dirname, '..'),
    require('node:path').resolve(__dirname, './watchPackages/@brightlayer-ui/react-native-components'),
    require('node:path').resolve(__dirname, './watchPackages/@brightlayer-ui/react-native-auth-workflow'),
];

config.resolver = {
    ...config.resolver,
    alias: {
        '@brightlayer-ui/react-native-components': path.resolve(
            __dirname,
            './watchPackages/@brightlayer-ui/react-native-components'
        ),
        '@brightlayer-ui/react-native-themes': path.resolve(
            __dirname,
            './watchPackages/@brightlayer-ui/react-native-auth-workflow'
        ),
    },
    nodeModulesPaths: [path.resolve(__dirname, './watchPackages'), path.resolve(projectRoot, 'node_modules')],
};

module.exports = config;
