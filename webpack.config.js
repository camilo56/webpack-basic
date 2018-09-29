const path = require('path');
const webPack = require('webPack');
const webPackMerge = require('webPack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Aplitting Environment config
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = (env = {mode: "development", presets: []}) => {
  console.log("env", env)
  return webPackMerge ({
    mode: env.mode, //Allow us to remove the warning in terminal
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|svg)$/,
          use: ["url-loader"]
        }
      ]
    },
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin(), new webPack.ProgressPlugin()]
  }, 
    modeConfig(env.mode)
  )
};