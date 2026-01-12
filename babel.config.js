module.exports = {
  // Elimina "react-native-dotenv" de la lista de presets
  presets: ['module:@react-native/babel-preset'], 
  plugins: [
    [
      'module:react-native-dotenv', // Este nombre es el correcto
      {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }
    ]
  ]
};