const path = require('path'); // Importa el módulo path de node (commonJS)
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') // Importamos el plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	devServer: {
		hot: true,
		open: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader' // Entiende que el códig puede tener CSS
				]
			}
		]
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Webpack-dev-server'
		})
	]
}