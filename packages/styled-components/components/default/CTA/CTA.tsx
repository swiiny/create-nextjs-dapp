import React, { FC } from 'react';
import { ICTA } from './CTA.type';
import { useTheme } from 'styled-components';
import { ESize } from 'theme/theme.enum';
import { ETextType, EFontWeight, ETextAlign } from '../Text/Text.enum';
import Button from '../Button';
import { StyledCTA, TextEx } from './CTA.styles';
import { EFlex } from '@components/layout/Flex/Flex.enum';

const cloneCmd = 'npx create-nextjs-dapp';

const CTA: FC<ICTA> = () => {
	const theme = useTheme();

	return (
		<StyledCTA direction={EFlex.column} horizontal={EFlex.center} vertical={EFlex.center}>
			<TextEx
				type={ETextType.h2}
				size={ESize.s}
				color={theme.colors.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
			>
				Start coding is easy as
				<Button
					color={theme.colors.lightBlue}
					gradientContainerProps={{ marginTop: ESize.m }}
					valueToCopy={cloneCmd + '@latest'}
					noPaddingResponsive
				>
					{cloneCmd}
				</Button>
			</TextEx>
		</StyledCTA>
	);
};

export { CTA };
