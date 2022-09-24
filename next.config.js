const withTM = require('next-transpile-modules')(['@mui/system', '@mui/base', '@mui/styled-engine-sc']);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
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
	env: {},
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@mui/styled-engine': '@mui/styled-engine-sc'
		};
		return config;
	}
});

module.exports = nextConfig;
