module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    'react-native-reanimated/plugin',
  ],
};
