module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
        '^react-native$': '<rootDir>/../../node_modules/react-native'
    },
    testRegex: 'src/.*(test|spec)\\.[jt]sx?$',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    coverageDirectory: './coverage/',
    collectCoverage: true,
    coverageThreshold: {
        global: {
            lines: 75,
        },
    },
    coverageReporters: ['text', 'cobertura'],
    transformIgnorePatterns: [
        '../../node_modules/(?!(|@react-native/*|@brightlayer-ui/react-native-components|react-native-vector-icons|react-native-reanimated|react-native-animatable|react-native-iphone-x-helper|react-native-modal|react-native-safe-area-context|react-native-collapsible|@react-native/polyfills|react-native-status-bar-height|react-native-webview|react-native-webview|@okta/okta-react-native/*)/)',
    ],
    testEnvironment: 'node',
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
    verbose: true,
    setupFiles: [
        './jestSetupFile.js',
        '../../node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    modulePaths: ['<rootDir>'],
    modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/../../node_modules'],
};
