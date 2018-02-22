const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const clean = require('clean-webpack-plugin');
const manifest = require('webpack-manifest-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new extractTextPlugin({
	filename: '[name]-css.min.css'
});
const extractLESS = new extractTextPlugin({
	filenmae: '[name]-less.min.css'
});

module.exports = {
	// devtool: 'source-map',
	entry: {
		entry: './src/app.js',
		// hello: './src/helloworld.js',
		// vendor: ['vue', 'lodash']
	}, //['./src/helloworld.js', './src/multi.js'],
	// entry: './src/helloworld.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		chunkFilename: '[name].bundle.js'
		// publicPath: 'www.cdn.com/'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},
		{
			test: /\.css$/,
			use: extractCSS.extract({
				fallback: {
					loader: 'style-loader',
					options: {
						transform: './css.transform.js'
					}
				},
				use: [{
					loader: 'css-loader'
				},
				{
					loader: 'postcss-loader'
				}]
			})
		},
		{
			test: /\.less$/,
			use: extractLESS.extract({
				fallback: {
				// loader: 'style-loader/useable',
				loader: 'style-loader',
				options: {
					// insertInto: '#app',
					singleton: true//,
					//transform: './css.transform.js'
				}
			},
			use: [{
				loader: 'css-loader'
			},
			{
				loader: 'postcss-loader'
			},
			{
				loader: 'less-loader'
			}]
		})
		},
		{
			test: /\.(jpeg|png|jpg|gif)$/i,
			// use: [{loader: 'file-loader'}]
			use: [{loader: 'url-loader',
			query: {
				limit: 10000
			}
		}]
	}]
},
plugins: [
new clean(['dist']),
// new manifest(),
// new webpack.optimize.CommonsChunkPlugin({
// 	name: 'common',
// 	chunks: ['entry', 'hello'],
// 	minChunks: 2
// }),
// new webpack.optimize.CommonsChunkPlugin({
// 	names: ['vendor', 'manifast'],
// 	minChunks: Infinity
// }),
// new htmlWebpackPlugin({
// 	template: 'index.html',
// 	filename: 'index.html',
// 	inject: 'body'
// }),
new NyanProgressPlugin({
    // 获取进度的时间间隔，默认 180 ms
    debounceInterval: 360,
    nyanCatSays (progress, messages) {
    	if (progress === 1) {
        // 当构建完成时，喊出「呦，又在写 Bug 了？」
        return '呦, 又在写 Bug 了?'
    }
}
}),
extractCSS,
extractLESS
]
};
