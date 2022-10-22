import React, { FC } from 'react';
import { IGradientContainer } from './GradientContainer.type';
import styles from './GradientContainer.module.scss';
import classNames from 'classnames';
import { EHtmlTag } from '@theme/theme.enum';

const GradientContainer: FC<IGradientContainer> = ({
	children,
	component = EHtmlTag.div,
	className = '',
	...otherProps
}) => {
	const ContainerTag = component;

	return (
		<ContainerTag className={classNames(styles.gradientContainer, className)} {...otherProps}>
			{children}
		</ContainerTag>
	);
};

export { GradientContainer };
