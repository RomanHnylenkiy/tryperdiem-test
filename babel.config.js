module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-transform-private-methods", { loose: true }],
    [
      "module-resolver",
      {
        root: ["./src/"],
        alias: {
          "@": "./src",
        },
        extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],
      },
    ],
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        // safe: false,
        // allowUndefined: true,
        // verbose: false,
      },
    ],
  ],
};
