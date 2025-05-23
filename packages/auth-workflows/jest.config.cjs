module.exports = {
    "coverageDirectory": "./coverage/",
    "collectCoverage": true,
    "coverageThreshold": {
        "global": {
            "lines": 80
        }
    },
    "testEnvironment": "node",
    "preset": "react-native",
    "verbose": true,
    "testEnvironmentOptions": {
        "url": "http://localhost/"
    },
    "setupFiles": [
        "./node_modules/react-native-gesture-handler/jestSetup.js",
        "./jestSetupFile.js"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>setup-tests.js"
    ],
    "moduleNameMapper": {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "modulePaths": [
        "<rootDir>"
    ],
    "modulePathIgnorePatterns": [
        "<rootDir>/example/node_modules",
        "<rootDir>/lib/",
        "<rootDir>/dist/"
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!(|react-native|@react-native/*|@brightlayer-ui/react-native-components|react-native-vector-icons|react-native-reanimated|react-native-animatable|react-native-iphone-x-helper|react-native-modal|react-native-safe-area-context|react-native-collapsible|@react-native/polyfills|react-native-status-bar-height|react-native-webview|react-native-webview|@okta/okta-react-native/*)/)"
    ],
};
