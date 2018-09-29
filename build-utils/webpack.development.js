module.exports = env => ({
    output: {
      //filename: 'bundle.production.js',
      filename: 'bundle.development.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
});