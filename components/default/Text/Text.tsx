import React, { FC } from 'react';
import { IText } from './Text.type';
import { StyledText } from './Text.styles';
import { ETextType } from './Text.enum';

const Text: FC<IText> = ({ children, type = ETextType.p, size, color }) => {
	return (
		<StyledText as={type} size={size} color={color}>
			{children}
		</StyledText>
	);
};

export { Text };
