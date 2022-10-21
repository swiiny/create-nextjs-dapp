import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import useResponsive from '@hooks/useResponsive';
import { Box } from '@mui/system';
import { ESize } from 'packages/mui/theme/theme.enum';
import { FaStar } from 'react-icons/fa';
import WalletButton from '../WalletButton';

const repoUrl = 'https://github.com/JeremyTheintz/create-nextjs-dapp';

const Navbar = () => {
	const { isBiggerThanSm, isBiggerThanMd } = useResponsive();

	return (
		<Box
			component='nav'
			paddingY={{ xs: 2, md: 4 }}
			paddingX={{ xs: 2, md: 4 }}
			width='100%'
			sx={{ display: 'flex', justifyContent: 'space-between', position: 'fixed', left: '0', right: '0' }}
		>
			<Text type={ETextType.h1} size={ESize.s}>
				{`${isBiggerThanSm ? 'Create ' : ''}`}Nextjs Dapp
			</Text>

			<Box>
				{isBiggerThanMd && (
					<Button href={repoUrl} icon={<FaStar size={28} />} iconColor={'#e3b341'}>
						Star on Github
					</Button>
				)}

				<WalletButton />
			</Box>
		</Box>
	);
};

export { Navbar };
