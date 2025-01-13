import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { Box } from '@mui/system';
import { FaStar } from 'react-icons/fa';
import { ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';

const repoUrl = 'https://github.com/swiiny/create-nextjs-dapp';

const boxStyles = {
	display: 'flex',
	justifyContent: { xs: 'flex-end', sm: 'space-between' },
	position: 'fixed',
	left: '0',
	right: '0',
	padding: { xs: '16px', md: '32px' }
};

const titleStyles = { display: { xs: 'none', sm: 'flex' }, alignItems: 'flex-start' };

const gradientContainerProps = { sx: { display: { xs: 'none', md: 'flex' } } };

const Navbar = () => {
	return (
		<Box component='nav' width='100%' sx={boxStyles}>
			<Box sx={titleStyles}>
				<Text type={ETextType.h1} size={ESize.s}>
					Create Nextjs Dapp
				</Text>
			</Box>

			<Box>
				<Button
					href={repoUrl}
					icon={<FaStar size={28} />}
					iconColor={'#e3b341'}
					gradientContainerProps={gradientContainerProps}
				>
					Star on Github
				</Button>

				<WalletButton />
			</Box>
		</Box>
	);
};

export { Navbar };
