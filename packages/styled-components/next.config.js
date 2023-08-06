/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true, // ssr and displayName are configured by default
		removeConsole: process.env.NODE_ENV === 'production', // remove all console.*
		swcMinify: true // minify the bundle
	},
	exclude: ['node_modules'],
	images: {
		minimumCacheTTL: 60 * 10,
		deviceSizes: [660, 900, 1200, 1600, 1800]
	},
	experimental: {
		runtime: 'nodejs'
	},
	env: {
		RPC_ETHEREUM: process.env.RPC_ETHEREUM,
		RPC_AVALANCHE: process.env.RPC_AVALANCHE,
		WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID
	}
};

module.exports = nextConfig;
