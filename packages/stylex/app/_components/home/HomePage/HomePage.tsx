import * as stylex from '@stylexjs/stylex';
import { spacing } from '../../../../styles/theme.stylex';
import Tagline from '../Tagline';
import Technologies from '../Technologies';

const MD = '@media only screen and (min-width: 900px)';
const LG = '@media only screen and (min-width: 1200px)';

const styles = stylex.create({
	main: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: '100svh',
		paddingTop: spacing.m,
		paddingLeft: {
			default: spacing['2xs'],
			[MD]: spacing.m,
			[LG]: spacing['2xl']
		},
		paddingRight: {
			default: spacing['2xs'],
			[MD]: spacing.m,
			[LG]: spacing['2xl']
		}
	}
});

const HomePage = () => {
	return (
		<main {...stylex.props(styles.main)}>
			<Technologies />

			<Tagline />
		</main>
	);
};

export { HomePage };
