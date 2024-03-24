import Navbar from '@components/navbar/Navbar';
import * as stylex from '@stylexjs/stylex';
import { Metadata } from 'next';
import '../styles/globals.css';
import { colors } from '../styles/theme.stylex';
import { ClientProviders } from './providers';

export const metadata: Metadata = {
	title: 'Create NextJs Dapp',
	description:
		'Starter to create Dapps with Next, React and Ethers. No longer waste valuable time building your project structure. Start coding is easy as npx create-nextjs-dapp',
	applicationName: 'Create NextJs Dapp',
	appleWebApp: {
		statusBarStyle: 'default',
		title: 'Create NextJs Dapp'
	},
	icons: '/icon.png'
};

const styles = stylex.create({
	html: {
		height: '100%'
	},
	body: {
		margin: '0 auto',
		maxWidth: '1600px',
		backgroundColor: colors.black
	}
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html {...stylex.props(styles.html)} lang='en'>
			<head>
				{/* we can't use next/font as it requires SWC which is replaced by necessary babel config */}
				<link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap' rel='stylesheet' />
			</head>

			<body {...stylex.props(styles.body)}>
				<ClientProviders>
					<Navbar />

					{children}

					<footer></footer>
				</ClientProviders>
			</body>
		</html>
	);
}
