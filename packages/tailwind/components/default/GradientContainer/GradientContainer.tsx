import { EColor, EHtmlTag } from '@theme/theme.enum';
import { FC } from 'react';
import { IGradientContainer } from './GradientContainer.type';

const GradientContainer: FC<IGradientContainer> = ({
	children,
	component = EHtmlTag.div,
	className = '',
	...otherProps
}) => {
	const ContainerTag = component;

	return (
		<ContainerTag
			className={
				`relative rounded-[13px] shadow-custom border border-${EColor.darkGray} bg-gradient-to-b from-${EColor.darkGradientFrom} to-${EColor.darkGradientTo}` +
				' ' +
				className
			}
			{...otherProps}
		>
			{children}
		</ContainerTag>
	);
};

export { GradientContainer };
