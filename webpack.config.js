const path = require('path');

module.exports = env => {
  console.log("env", env)
  return {
    mode: env.mode, //Allow us to remove the warning in terminal
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};