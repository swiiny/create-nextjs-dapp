import Button from '@components/theme/Button';
import Text from '@components/theme/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/theme/Text/Text.enum';
import * as stylex from '@stylexjs/stylex';
import { FC } from 'react';
import { EColor, ESize } from 'styles/theme.enum';
import { colors } from '../../../../styles/theme.stylex';

const SM = '@media only screen and (min-width: 600px)';

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		transform: {
			default: 'scale(0.9)',
			[SM]: 'scale(1)'
		}
	},
	text: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		marginTop: '32px',
		color: colors.lightBlue
	}
});

const cloneCmd = 'npx create-nextjs-dapp';

const CTA: FC = () => {
	return (
		<div {...stylex.props(styles.container)}>
			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={EColor.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
				style={styles.text}
			>
				Start coding is easy as
				<Button style={styles.button} valueToCopy={cloneCmd + '@latest'}>
					{cloneCmd}
				</Button>
			</Text>
		</div>
	);
};

export { CTA };
