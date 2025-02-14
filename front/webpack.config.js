const path = require('path');

module.exports = {
  entry: './src/index.js',  // Archivo de entrada
  output: {
    filename: 'bundle.js',  // Archivo de salida
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  // O 'production' para optimización
};
