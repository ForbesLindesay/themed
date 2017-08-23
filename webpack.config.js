const path = require('path');
const HappyPack = require('HappyPack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		alias: {},
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"],
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				include: path.resolve(__dirname, 'src'),
				loader: [
					'happypack/loader',
					'ts-loader'
				],
			},
		],
	},
	plugins: [
		new HappyPack({
			threads: 2,
			loaders: [
				{
					loader: 'babel-loader',
					query: {
						cacheDirectory: './webpack_cache/',
					},
				},
			],
		}),
	]
};