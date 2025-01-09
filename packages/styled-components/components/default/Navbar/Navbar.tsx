import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import Flex from '@components/layout/Flex';
import { EFlex } from '@components/layout/Flex/Flex.enum';
import { FaStar } from 'react-icons/fa';
import { EMediaQuery, ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';
import { StyledNavbar } from './Navbar.styles';

const repoUrl = 'https://github.com/swiiny/create-nextjs-dapp';

const Navbar = () => {
	return (
		<StyledNavbar>
			<Text type={ETextType.h1} size={ESize.s} hiddenRange={[EMediaQuery.sm, undefined]}>
				Create Nextjs Dapp
			</Text>

			<Flex vertical={EFlex.center}>
				<Button
					href={repoUrl}
					icon={<FaStar size={28} />}
					iconColor={'#e3b341'}
					hiddenRange={[EMediaQuery.md, undefined]}
				>
					Star on Github
				</Button>

				<WalletButton />
			</Flex>
		</StyledNavbar>
	);
};

export { Navbar };
