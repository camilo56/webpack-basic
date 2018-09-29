const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {mode: "production", presets: []}) => {
    console.log("env", env)
    return {
      output: {
        //filename: 'bundle.production.js',
        filename: '[hash].js',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          }
        ]
      },
      plugins: [new MiniCssExtractPlugin()]
    }
};