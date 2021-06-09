const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: "index.js"
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				filename: "index.html",
				template: "./index.html"
			}
		)
	]
}
