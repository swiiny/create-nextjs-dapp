import React, { FC } from 'react';
import { IText } from './Text.type';
import styles from './Text.module.scss';
import { ETextType } from './Text.enum';
import { ESize } from '@theme/theme.enum';
import classNames from 'classnames';

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
				[styles[`${color}`]]: !!color
			})}
			{...otherProps}
		>
			{children}
		</TextTag>
	);
};

export { Text };
