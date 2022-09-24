/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true, // ssr and displayName are configured by default
		removeConsole: process.env.NODE_ENV === 'production', // remove all console.*
		swcMinify: true // minify the bundle
		/* baseUrl: '.',
		paths: {
			'@components': ['components/*'],
			'@utils': ['utils/*'],
			'@hooks': ['hooks/*'],
			'@graphql': ['graphql/*'],
			'@contexts': ['contexts/*'],
			'@interfaces': ['interfaces/*']
		} */
	},
	exclude: ['node_modules'],
	images: {
		minimumCacheTTL: 60 * 10,
		deviceSizes: [660, 900, 1200, 1600, 1800]
	},
	experimental: {
		runtime: 'nodejs'
	},
	env: {}
};

module.exports = nextConfig;
