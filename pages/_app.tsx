import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/GlobalStyles';
import { darkTheme } from '@theme/theme';
import Navbar from '@components/common/Navbar';

const DappBoilerplate = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/icon.png'></link>

				<meta name='application-name' content='Dapp boilerplate' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='Dapp boilerplate' />
				<meta name='description' content='Dapp boilerplate working with Next.js and ethers.js' />

				<meta name='theme-color' content='#131923' />
			</Head>

			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default DappBoilerplate;
