import Button from '@components/theme/Button';
import Text from '@components/theme/Text';
import { ETextType } from '@components/theme/Text/Text.enum';
import * as stylex from '@stylexjs/stylex';
import { FaStar } from 'react-icons/fa';
import { ESize } from '../../../../styles/theme.enum';
import WalletButton from '../WalletButton';

const repoUrl = 'https://github.com/swiiny/create-nextjs-dapp';

const SM = '@media (max-width: 899px)';
const MD = '@media (min-width: 900px)';

const styles = stylex.create({
	navbar: {
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 10,
		display: 'flex',
		width: '100%',
		padding: {
			default: '1rem',
			[MD]: '2rem'
		},
		justifyContent: {
			default: 'flex-end',
			[MD]: 'space-between'
		}
	},
	title: {
		display: {
			default: 'initial',
			[SM]: 'none'
		}
	},
	buttonsContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem'
	},
	button: {
		display: {
			default: 'initial',
			'@media (max-width: 600px)': 'none'
		}
	},
	icon: {
		color: '#e3b341'
	}
});

const Navbar = () => {
	return (
		<nav {...stylex.props(styles.navbar)}>
			<Text type={ETextType.h1} size={ESize.s} style={styles.title}>
				Create Nextjs Dapp
			</Text>

			<div {...stylex.props(styles.buttonsContainer)}>
				<Button href={repoUrl} icon={<FaStar size={28} {...stylex.props(styles.icon, styles.button)} />}>
					Star on Github
				</Button>

				<WalletButton />
			</div>
		</nav>
	);
};

export { Navbar };
