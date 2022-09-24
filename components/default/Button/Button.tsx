import React, { FC } from 'react';
import { IButton } from './Button.type';
import { StyledButton } from './Button.styles';
import GradientContainer from '../GradientContainer';
import { Box } from '@mui/system';

const Button: FC<IButton> = ({ children, icon, gradientContainerProps }) => {
	return (
		<StyledButton>
			<GradientContainer
				paddingY='12px'
				paddingX='36px'
				display='flex'
				sx={{ justifyContent: 'center', alignItems: 'center' }}
				{...gradientContainerProps}
			>
				{children}

				{icon ? icon : <></>}
			</GradientContainer>
		</StyledButton>
	);
};

export { Button };
