import Meta from '@components/common/Meta';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Meta
				title='Create Nextjs Dapp'
				description='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
			/>

			<div>
				<main>{/* add home page content here */}</main>

				<footer></footer>
			</div>
		</>
	);
};

export { HomePage };
