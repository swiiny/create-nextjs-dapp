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
		<meta name='twitter:title' content={title} />
		<meta name='twitter:description' content={description} />

		{children}
	</Head>
);

export { Meta };
