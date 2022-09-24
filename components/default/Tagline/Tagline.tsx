import React, { FC } from 'react';
import { ITagline } from './Tagline.type';
import { useTheme } from 'styled-components';
import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { ESize } from '@theme/theme.enum';

const Tagline: FC<ITagline> = () => {
	const theme = useTheme();

	return (
		<div>
			<Text type={ETextType.h1} component={ETextType.h2} weight={EFontWeight.regular} align={ETextAlign.center}>
				{`Starter for building `}
				<Text type={ETextType.span} color={theme.colors.blueGradient}>
					Dapps
				</Text>
				{' with '}
				<Text type={ETextType.span} color={theme.colors.blueGradient}>
					Next
				</Text>
				{', '}
				<Text type={ETextType.span} color={theme.colors.blueGradient}>
					React
				</Text>
				{' and '}
				<Text type={ETextType.span} color={theme.colors.blueGradient}>
					Ethers
				</Text>
			</Text>

			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={theme.colors.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
			>
				No longer waste valuable time building your project structure
			</Text>
		</div>
	);
};

export { Tagline };
