import { Box } from '@mui/system';
import { FC } from 'react';
import { useTheme } from 'styled-components';
import { ESize } from 'theme/theme.enum';
import Button from '../Button';
import { EFontWeight, ETextAlign, ETextType } from '../Text/Text.enum';
import { TextEx } from './CTA.styles';
import { ICTA } from './CTA.type';

const cloneCmd = 'npx create-nextjs-dapp';

const boxStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	transform: { xs: 'scale(0.9)', sm: 'unset' }
};

const gradientContainerProps = { marginTop: 4 };

const CTA: FC<ICTA> = () => {
	const theme = useTheme();

	return (
		<Box sx={boxStyles}>
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
					gradientContainerProps={gradientContainerProps}
					valueToCopy={cloneCmd + '@latest'}
					noPaddingResponsive
				>
					{cloneCmd}
				</Button>
			</TextEx>
		</Box>
	);
};

export { CTA };
