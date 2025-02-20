module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    // react-native-reanimated/plugin must be listed last
    plugins: ['react-native-reanimated/plugin', ['@babel/plugin-proposal-private-methods', { loose: true }]],
};
