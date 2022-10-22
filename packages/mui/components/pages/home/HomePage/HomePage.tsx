import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import Tagline from '@components/default/Tagline';
import Technologies from '@components/default/Technologies';
import { Box } from '@mui/system';
import { FC } from 'react';
import { IHomePage } from './HomePage.type';

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
