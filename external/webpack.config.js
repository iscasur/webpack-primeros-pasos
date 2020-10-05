const path = require('path'); // Importa el módulo path de node (commonJS)

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}