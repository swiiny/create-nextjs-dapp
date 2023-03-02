import { FC } from 'react';
import { ETextType } from './Text.enum';
import { StyledText } from './Text.styles';
import { IText } from './Text.type';

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
