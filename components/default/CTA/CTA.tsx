import React, { FC } from 'react';
import { ICTA } from './CTA.type';
import { StyledCTA } from './CTA.styles';
import { Box } from '@mui/system';
import Text from '../Text';
import { useTheme } from 'styled-components';
import { ESize } from '@theme/theme.enum';
import { ETextType, EFontWeight, ETextAlign } from '../Text/Text.enum';
import Button from '../Button';
import { MdOutlineContentCopy } from 'react-icons/md';

const CTA: FC<ICTA> = () => {
	const theme = useTheme();

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
				icon={<MdOutlineContentCopy size={24} />}
			>
				git clone https://github.com/JeremyTheintz/nextjs-web3-boilerplate.git
			</Button>
		</Box>
	);
};

export { CTA };
