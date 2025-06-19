module.exports = {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-react', '@babel/preset-typescript', 'module:@react-native/babel-preset'],
    // react-native-reanimated/plugin must be listed last
    plugins: [
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
        'react-native-reanimated/plugin',
    ],
};
