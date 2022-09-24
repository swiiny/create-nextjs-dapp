import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { Box } from '@mui/system';
import { ESize } from '@theme/theme.enum';
import { FaStar, FaGithub } from 'react-icons/fa';

const Navbar = () => {
	return (
		<Box
			component='nav'
			paddingY={4}
			paddingX={4}
			width='100%'
			sx={{ display: 'flex', justifyContent: 'space-between', position: 'fixed' }}
		>
			<Text type={ETextType.h1} size={ESize.s}>
				Nextjs Dapp template
			</Text>

			<Box>
				<Button icon={<FaStar size={28} />} iconColor='#e3b341'>
					Star
				</Button>

				<Button icon={<FaGithub size={28} />}>Github</Button>
			</Box>
		</Box>
	);
};

export { Navbar };
