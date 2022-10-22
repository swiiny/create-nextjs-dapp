import React, { FC } from 'react';
import { IText } from './Text.type';
import { StyledText } from './Text.styles';
import { ETextType } from './Text.enum';

const Text: FC<IText> = ({ children, type = ETextType.p, component, size, weight, align, color, ...otherProps }) => {
	return (
		<StyledText
			as={component || type}
			component={type}
			size={size}
			weight={weight}
			align={align}
			color={color}
			{...otherProps}
		>
			{children}
		</StyledText>
	);
};

export { Text };
