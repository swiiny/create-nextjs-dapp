import * as stylex from '@stylexjs/stylex';
import { Metadata } from 'next';
import '../styles/globals.css';
import { colors } from '../styles/theme.stylex';

export const metadata: Metadata = {
	title: 'Create NextJs Dapp',
	description:
		'Starter to create Dapps with Next, React and Ethers. No longer waste valuable time building your project structure. Start coding is easy as npx create-nextjs-dapp',
	applicationName: 'Create Nextjs Dapp',
	appleWebApp: {
		statusBarStyle: 'default',
		title: 'Create Nextjs Dapp'
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
				<link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap' rel='stylesheet' />
			</head>

			<body {...stylex.props(styles.body)}>
				{children}

				<footer></footer>
			</body>
		</html>
	);
}
