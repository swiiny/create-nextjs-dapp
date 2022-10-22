import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import Tagline from '@components/default/Tagline';
import Technologies from '@components/default/Technologies';
import { FC } from 'react';
import styles from './HomePage.module.scss';
import { IHomePage } from './HomePage.type';

const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Meta
				title='Create Nextjs Dapp'
				description='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
			/>

			<div>
				<div className={styles.mainContainer}>
					<Technologies />

					<Tagline />

					<CTA />
				</div>
			</div>
		</>
	);
};

export { HomePage };
