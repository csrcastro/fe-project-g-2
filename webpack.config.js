var Webpack = require('webpack');
var path = require('path');
var Html = require('html-webpack-plugin');
var htmlConfig = new Html({
	template: path.resolve('src/index.html'),
	filename: "index.html",
	inject: 'body'
});

var HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();


module.exports = { // Actual configuration object returned by this file, this configuration object isloade into Webpack

	entry: path.resolve('src/app.js'), // Declaration of our main application file (entry point), Webpack will parse this file and look for the modules to be loaded into the bundle
	
	module: { // Here we list the options that will affect our modules before bundling
		loaders: [{ // A collection of automatically applied loaders (think of these as the agents that affect our modules)
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ["es2015","react"]
			}
		}]
	},

	output: { // Tells Webpack how to write the compiled files to disk. In our case it will write to ./public/scripts.js
		path: path.resolve(__dirname, 'public'),
		filename: 'scripts.js'
	},

	plugins: [ // Adds additional plugins to the compiler
		HotModuleReplacementPlugin,
		htmlConfig
	],

	devServer: { // Webpack development server configuration file
		contentBase: path.resolve(__dirname, 'public'), // The folder to serve our files from
		historyApiFallback: true,
		hot: true, // Are we using Ht module replacement? Yes we are...
		inline: true, // Tells Webpack Dev Server to use the same entry point as Webpack and Automatically refresh on change
		host: process.env.USER  === 'csrcastro' ? 'csrcastro.local' : 'localhost' // Local domain to bind our instance or the Webpack dev server
	}
}