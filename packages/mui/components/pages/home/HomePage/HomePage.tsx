import Head from 'next/head';
import React, { FC } from 'react';
import { IHomePage } from './HomePage.type';
import { Box } from '@mui/system';
import Technologies from '@components/default/Technologies';
import { useTheme } from 'styled-components';
import Tagline from '@components/default/Tagline';
import CTA from '@components/default/CTA';
import Meta from '@components/common/Meta';

const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Meta
				title='Create Nextjs Dapp'
				description='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
			/>
			<div>
				<Box
					height='100vh'
					paddingTop='30px'
					paddingX={{ xs: '15px', md: '32px', lg: '64px' }}
					sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}
				>
					<Technologies />

					<Tagline />

					<CTA />
				</Box>

				<footer></footer>
			</div>
		</>
	);
};

export { HomePage };
