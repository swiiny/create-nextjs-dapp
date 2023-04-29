import { EColor, ESize } from '@theme/theme.enum';
import clsx from 'clsx';
import { FC } from 'react';
import { EFontWeight, ETextAlign, ETextType } from './Text.enum';
import { IText } from './Text.type';

const Text: FC<IText> = ({
	children,
	type = ETextType.p,
	component,
	size = ESize.m,
	weight,
	align,
	color = EColor.white,
	className = '',
	...otherProps
}) => {
	const TextTag = component || type;

	return (
		<TextTag
			className={clsx(
				'text',
				className,
				{
					'text-regular': weight === EFontWeight.regular,
					'text-bold': weight === EFontWeight.bold,
					'text-left': align === ETextAlign.left,
					'text-center': align === ETextAlign.center,
					'text-right': align === ETextAlign.right
				},
				`font-${component || type}-${size}`,
				color ? `text-${color}` : ''
			)}
			{...otherProps}
		>
			{children}
		</TextTag>
	);
};

export { Text };
