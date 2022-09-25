import React, { FC } from 'react';
import Head from 'next/head';
import { IMeta } from './Meta.type';

// used to add title, description and other meta tags to the page
const Meta: FC<IMeta> = ({ title, description, children }) => (
	<Head>
		<title>{title}</title>
		<meta property='og:title' content={title} key='title' />
		<meta name='description' content={description} />
		<meta property='og:title' content={title} key='title' />
		<meta property='og:description' content={description} />
		<meta property='og:image' content='https://create-nextjs-d.app/thumbnail.png' />
		<meta name='language' content='English' />
		<meta name='robots' content='index, follow' />
		<meta name='keywords' content={`Create-Nextjs-Dapp`} />

		<meta name='twitter:card' content='summary' />
		<meta name='twitter:site' content='@Swiiny_' />
		<meta name='twitter:creator	' content='@Swiiny_' />
		<meta name='twitter:title' content={title} />
		<meta name='twitter:description' content={description} />
		<meta name='twitter:image' content='https://create-nextjs-d.app/thumbnail.png' />
		<meta name='twitter:image:alt' content='Create Nextjs Dapp twitter card' />

		{children}
	</Head>
);

export { Meta };
