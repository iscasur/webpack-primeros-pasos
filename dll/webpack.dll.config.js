const path = require('path'); // Importa el módulo path de node (commonJS)
const webpack = require('webpack')

module.exports = {
	entry: {
		modules: [
			'react',
			'react-dom'
		]
	},
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		library: '[name]',
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.join(__dirname, '[name]-manifest.json')
		})
	],
}