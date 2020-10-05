const path = require('path'); // Importa el módulo path de node (commonJS)

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
		precios: path.resolve(__dirname, 'src/js/precios.js'),
		contacto: path.resolve(__dirname, 'src/js/contacto.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	}
}