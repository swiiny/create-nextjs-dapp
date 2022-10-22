import React, { FC } from 'react';
import { IGradientContainer } from './GradientContainer.type';
import { StyledGradientContainer } from './GradientContainer.styles';

const GradientContainer: FC<IGradientContainer> = ({ children, ...otherProps }) => {
	return <StyledGradientContainer {...otherProps}>{children}</StyledGradientContainer>;
};

export { GradientContainer };
