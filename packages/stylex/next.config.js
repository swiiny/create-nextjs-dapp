/** @type {import('next').NextConfig} */
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const babelrc = require('./.babelrc.js');
const plugins = babelrc.plugins;
const [_name, options] = plugins.find((plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin');
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production', // remove all console.*
		swcMinify: true // minify the bundle
	},
	exclude: ['node_modules'],
	images: {
		minimumCacheTTL: 60 * 10,
		deviceSizes: [660, 900, 1200, 1600, 1800]
	} /* 
	experimental: {
		runtime: 'nodejs'
	}, */,
	env: {
		RPC_ETHEREUM: process.env.RPC_ETHEREUM,
		RPC_AVALANCHE: process.env.RPC_AVALANCHE,
		WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID
	}
};

module.exports = stylexPlugin({
	rootDir,
	useCSSLayers: true
})({
	...nextConfig,
	transpilePackages: ['@stylexjs/open-props']
});
