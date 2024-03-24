import Text from '@components/theme/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/theme/Text/Text.enum';
import * as stylex from '@stylexjs/stylex';
import { FC } from 'react';
import { EColor, ESize } from '../../../../styles/theme.enum';
import { spacing } from '../../../../styles/theme.stylex';
import { ITagline } from './Tagline.type';

const styles = stylex.create({
	text: {
		marginBottom: spacing['3xs']
	}
});

const Tagline: FC<ITagline> = () => {
	return (
		<div>
			<Text
				type={ETextType.h1}
				component={ETextType.h2}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
				style={styles.text}
			>
				{`Starter to create `}
				<Text type={ETextType.span} color={EColor.blueGradient}>
					Dapps
				</Text>
				{' with '}
				<Text type={ETextType.span} color={EColor.blueGradient}>
					Next
				</Text>
				{', '}
				<Text type={ETextType.span} color={EColor.blueGradient}>
					React
				</Text>
				{' and '}
				<Text type={ETextType.span} color={EColor.blueGradient}>
					Ethers
				</Text>
			</Text>

			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={EColor.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
			>
				No longer waste valuable time building your project structure
			</Text>
		</div>
	);
};

export { Tagline };
