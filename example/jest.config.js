module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community|@hortau/react-native-wheel-picker-android)/)',
  ],
};
