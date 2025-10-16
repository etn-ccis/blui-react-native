module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.svg$': 'identity-obj-proxy',
        '\\.(ttf|otf|woff|woff2|eot)$': '<rootDir>/__mocks__/fileMock.js',
    },
    testRegex: 'src/.*(test|spec)\\.[jt]sx?$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: true,
    coverageThreshold: {
        "global": {
          "lines": 75
        }
      },
    coverageReporters: ['text', 'cobertura'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native/*|@brightlayer-ui/react-native-vector-icons|@react-native-vector-icons/*|react-native-vector-icons|react-native-animatable|react-native-reanimated|react-native-iphone-x-helper|react-native-modal|react-native-collapsible|@react-native/polyfills)/)',
    ],
};
