import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import Tagline from '@components/default/Tagline';
import Technologies from '@components/default/Technologies';
import { Box } from '@mui/system';
import { FC } from 'react';
import { IHomePage } from './HomePage.type';

const boxStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	paddingX: { xs: '15px', md: '32px', lg: '64px' },
	paddingTop: '32px',
	height: '100dvh'
};

const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Meta
				title='Create Nextjs Dapp'
				description='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
			/>
			<div>
				<Box sx={boxStyles}>
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
