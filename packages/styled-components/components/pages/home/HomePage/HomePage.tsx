import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import Tagline from '@components/default/Tagline';
import Technologies from '@components/default/Technologies';
import { FC } from 'react';
import { StyledMainContainer } from './HomePage.styles';
import { IHomePage } from './HomePage.type';

const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Meta
				title='Create Nextjs Dapp'
				description='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
			/>
			<div>
				<StyledMainContainer>
					<Technologies />

					<Tagline />

					<CTA />
				</StyledMainContainer>

				<footer></footer>
			</div>
		</>
	);
};

export { HomePage };
