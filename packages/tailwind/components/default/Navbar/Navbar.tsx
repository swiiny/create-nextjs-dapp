import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { EFontWeight, ETextType } from '@components/default/Text/Text.enum';
import { FaStar } from 'react-icons/fa';
import { EColor, ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';

const repoUrl = 'https://github.com/swiiny/create-nextjs-dapp';

const Navbar = () => {
	return (
		<nav className='fixed left-0 top-0 flex justify-end w-full p-4 sm:justify-between md:p-8'>
			<Text type={ETextType.h1} size={ESize.s} weight={EFontWeight.bold} className='hidden sm:inline-block'>
				Create Nextjs Dapp
			</Text>

			<div className='flex items-center justify-end gap-4'>
				<Button
					href={repoUrl}
					icon={
						<FaStar
							size={28}
							className={`text-${EColor.yellow} transform scale-[0.7] md:scale-[0.8] xl:scale-[1.0] ml-4`}
						/>
					}
					customClasses='hidden md:inline-block'
				>
					Star on Github
				</Button>

				<WalletButton />
			</div>
		</nav>
	);
};

export { Navbar };
