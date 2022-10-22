import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import useResponsive from '@hooks/useResponsive';
import { EColor, ESize } from 'theme/theme.enum';
import { FaStar } from 'react-icons/fa';
import WalletButton from '../WalletButton';
import styles from './Navbar.module.scss';

const repoUrl = 'https://github.com/JeremyTheintz/create-nextjs-dapp';

const Navbar = () => {
	const { isBiggerThanSm, isBiggerThanMd } = useResponsive();

	return (
		<nav className={styles.navbar}>
			<Text type={ETextType.h1} size={ESize.s}>
				{`${isBiggerThanSm ? 'Create ' : ''}`}Nextjs Dapp
			</Text>

			<div>
				{isBiggerThanMd && (
					<Button href={repoUrl} icon={<FaStar size={28} />} iconColor={EColor.yellow}>
						Star on Github
					</Button>
				)}

				<WalletButton />
			</div>
		</nav>
	);
};

export { Navbar };
