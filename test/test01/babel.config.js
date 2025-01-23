module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          features: './src/features',
          reducers: './src/reducers',
          types: './src/types',
          assets: './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
