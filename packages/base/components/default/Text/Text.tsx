import { ESize } from '@theme/theme.enum';
import classNames from 'classnames';
import { FC } from 'react';
import { ETextType } from './Text.enum';
import styles from './Text.module.scss';
import { IText } from './Text.type';

const Text: FC<IText> = ({
	children,
	type = ETextType.p,
	component,
	size = ESize.m,
	weight,
	align,
	color,
	className = '',
	...otherProps
}) => {
	const TextTag = component || type;

	return (
		<TextTag
			className={classNames(styles.text, className, {
				[styles[`${weight}`]]: !!weight,
				[styles[`align`]]: !!align,
				[styles[`${align}`]]: !!align,
				[styles[`${size}`]]: !!size,
				[styles[`${color}`]]: !!color,
				[styles[`${type}`]]: !!type
			})}
			{...otherProps}
		>
			{children}
		</TextTag>
	);
};

export { Text };
