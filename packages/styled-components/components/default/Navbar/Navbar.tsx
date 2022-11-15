import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import Flex from '@components/layout/Flex';
import { FaStar } from 'react-icons/fa';
import { ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';
import { StyledNavbar } from './Navbar.styles';

const repoUrl = 'https://github.com/JeremyTheintz/create-nextjs-dapp';

const Navbar = () => {
	return (
		<StyledNavbar>
			<Text type={ETextType.h1} size={ESize.s}>
				Create Nextjs Dapp
			</Text>

			<Flex>
				<Button href={repoUrl} icon={<FaStar size={28} />} iconColor={'#e3b341'} hidden mdVisible>
					Star on Github
				</Button>

				<WalletButton />
			</Flex>
		</StyledNavbar>
	);
};

export { Navbar };
