const path = require('path'); // Importa el módulo path de node (commonJS)
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') // Importamos el plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					'css-loader' // Entiende que el códig puede tener CSS
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Plugins'
		}),
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css'
		})
	]
}