module.exports = {
    preset: 'react-native',
    coverageDirectory: './coverage/',
    collectCoverage: true,
    transformIgnorePatterns: [
        'node_modules/(?!(|react-native|@react-native/*|@brightlayer-ui/react-native-components|react-native-vector-icons|react-native-animatable|react-native-reanimated|react-native-iphone-x-helper|react-native-modal|react-native-collapsible|@react-native/polyfills|react-native-status-bar-height|react-native-webview|react-native-webview/*)/)',
    ],
};
