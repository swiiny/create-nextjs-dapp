import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { FaStar } from 'react-icons/fa';
import { EColor, ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';
import styles from './Navbar.module.scss';

const repoUrl = 'https://github.com/swiiny/create-nextjs-dapp';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Text type={ETextType.h1} size={ESize.s}>
				Create Nextjs Dapp
			</Text>

			<div>
				<Button href={repoUrl} icon={<FaStar size={28} />} iconColor={EColor.yellow} customClasses={styles.mdVisible}>
					Star on Github
				</Button>

				<WalletButton />
			</div>
		</nav>
	);
};

export { Navbar };
