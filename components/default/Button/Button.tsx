import React, { FC } from 'react';
import { IButton } from './Button.type';
import { StyledButton } from './Button.styles';
import GradientContainer from '../GradientContainer';

const Button: FC<IButton> = ({ children, onClick, color, icon, iconColor, gradientContainerProps }) => {
	return (
		<StyledButton onClick={onClick} color={color} iconColor={iconColor}>
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
