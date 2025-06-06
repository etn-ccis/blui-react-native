module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // react-native-reanimated should be last in the plugins array
    'react-native-reanimated/plugin',
  ],
};
