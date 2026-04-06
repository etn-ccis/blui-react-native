const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Helper to check if path exists
const existsSync = (p) => {
    try {
        fs.accessSync(p);
        return true;
    } catch {
        return false;
    }
};

// 1. Watch all files within the monorepo
const watchPackagesDir = path.resolve(__dirname, './watchPackages');
const watchFolders = [monorepoRoot];

// Only add watchPackages paths if they exist
if (existsSync(watchPackagesDir)) {
    const componentsPath = path.resolve(watchPackagesDir, '@brightlayer-ui/react-native-components');
    const progressIconsPath = path.resolve(watchPackagesDir, '@brightlayer-ui/react-native-progress-icons');
    const themesPath = path.resolve(watchPackagesDir, '@brightlayer-ui/react-native-themes');

    if (existsSync(componentsPath)) watchFolders.push(componentsPath);
    if (existsSync(progressIconsPath)) watchFolders.push(progressIconsPath);
    if (existsSync(themesPath)) watchFolders.push(themesPath);
}

config.watchFolders = watchFolders;

// Only set up aliases if watchPackages exist
if (existsSync(watchPackagesDir)) {
    config.resolver = {
        ...config.resolver,
        alias: {
            '@brightlayer-ui/react-native-auth-workflow': path.resolve(
                watchPackagesDir,
                '@brightlayer-ui/react-native-auth-workflow'
            ),
            '@brightlayer-ui/react-native-themes': path.resolve(
                watchPackagesDir,
                '@brightlayer-ui/react-native-themes'
            ),
            '@brightlayer-ui/react-native-progress-icons': path.resolve(
                watchPackagesDir,
                '@brightlayer-ui/react-native-progress-icons'
            ),
        },
    };
}

// 2. Let Metro know where to resolve packages and in what order
const nodeModulesPaths = [path.resolve(projectRoot, 'node_modules'), path.resolve(monorepoRoot, 'node_modules')];
if (existsSync(watchPackagesDir)) {
    nodeModulesPaths.push(watchPackagesDir);
}
config.resolver.nodeModulesPaths = nodeModulesPaths;

module.exports = config;
