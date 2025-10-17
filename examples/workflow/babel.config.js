module.exports = {
    presets: ['module:@react-native/babel-preset'],
    // react-native-reanimated/plugin must be listed last
    plugins: ['module:react-native-dotenv', 'react-native-worklets/plugin'],
};
