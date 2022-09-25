import React, { FC } from 'react';
import { ICTA } from './CTA.type';
import { Box } from '@mui/system';
import Text from '../Text';
import { useTheme } from 'styled-components';
import { ESize } from '@theme/theme.enum';
import { ETextType, EFontWeight, ETextAlign } from '../Text/Text.enum';
import Button from '../Button';

const cloneCmd = 'npx create-nextjs-dapp';

const CTA: FC<ICTA> = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				transform: { xs: 'scale(0.9)', sm: 'unset' }
			}}
		>
			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={theme.colors.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
			>
				Start coding is easy as
			</Text>

			<Button
				color={theme.colors.lightBlue}
				gradientContainerProps={{ marginTop: 4 }}
				valueToCopy={cloneCmd + '@latest'}
				noPaddingResponsive
			>
				{cloneCmd}
			</Button>
		</Box>
	);
};

export { CTA };
