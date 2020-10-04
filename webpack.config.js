const path = require('path'); // Importa el módulo path de node (commonJS)

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	}
}