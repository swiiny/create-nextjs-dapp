import React, { FC } from 'react';
import { ITagline } from './Tagline.type';
import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { EColor, ESize } from 'theme/theme.enum';

const Tagline: FC<ITagline> = () => {
	return (
		<div>
			<Text type={ETextType.h1} component={ETextType.h2} weight={EFontWeight.regular} align={ETextAlign.center}>
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
