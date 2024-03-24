import * as stylex from '@stylexjs/stylex';
import { spacing } from '../../../../styles/theme.stylex';
import CTA from '../CTA';
import Tagline from '../Tagline';
import Technologies from '../Technologies';

const MD = '@media only screen and (min-width: 900px) and (max-width: 1199px)';
const LG = '@media only screen and (min-width: 1200px)';

const styles = stylex.create({
	main: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: '100dvh',
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

			<CTA />
		</main>
	);
};

export { HomePage };
