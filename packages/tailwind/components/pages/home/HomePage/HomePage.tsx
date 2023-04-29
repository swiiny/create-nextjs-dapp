import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import Tagline from '@components/default/Tagline';
import Technologies from '@components/default/Technologies';
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
				<div className='flex flex-col justify-evenly h-screen pt-24 px-4 md:px-8 md:pt-8 lg:px-16'>
					<Technologies />

					<Tagline />

					<CTA />
				</div>
			</div>
		</>
	);
};

export { HomePage };
