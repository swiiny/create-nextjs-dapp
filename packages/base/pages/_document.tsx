import { Html, Head, Main, NextScript } from 'next/document';

export default function CreateNextjsDappDocument() {
	return (
		<Html lang='en'>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap' rel='stylesheet' />
				<meta name='application-name' content='Create NextJs Dapp' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='Create NextJs Dapp' />
				<meta
					name='description'
					content='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}