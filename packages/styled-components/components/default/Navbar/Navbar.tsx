import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import useResponsive from '@hooks/useResponsive';
import { ESize } from 'theme/theme.enum';
import { FaStar } from 'react-icons/fa';
import WalletButton from '../WalletButton';
import { StyledNavbar } from './Navbar.styles';
import Flex from '@components/layout/Flex';

const repoUrl = 'https://github.com/JeremyTheintz/create-nextjs-dapp';

const Navbar = () => {
	const { isBiggerThanSm, isBiggerThanMd } = useResponsive();

	return (
		<StyledNavbar>
			<Text type={ETextType.h1} size={ESize.s}>
				{`${isBiggerThanSm ? 'Create ' : ''}`}Nextjs Dapp
			</Text>

			<Flex>
				{isBiggerThanMd && (
					<Button href={repoUrl} icon={<FaStar size={28} />} iconColor={'#e3b341'}>
						Star on Github
					</Button>
				)}

				<WalletButton />
			</Flex>
		</StyledNavbar>
	);
};

export { Navbar };
