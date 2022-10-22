import React, { FC, useMemo, useState } from 'react';
import { IButton } from './Button.type';
import GradientContainer from '../GradientContainer';
import { MdOutlineContentCopy, MdOutlineCheck } from 'react-icons/md';
import { copy } from 'utils/global';
import { EColor, EHtmlTag } from '@theme/theme.enum';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button: FC<IButton> = ({
	children,
	onClick,
	href,
	noPaddingResponsive = false,
	valueToCopy,
	color,
	iconColor,
	icon,
	gradientContainerProps
}) => {
	const [isCopying, setIsCopying] = useState(false);

	const contentColor = isCopying ? EColor.success : color;

	const handleClick = () => {
		if (valueToCopy) {
			copy(valueToCopy);

			setIsCopying(true);

			setTimeout(() => {
				setIsCopying(false);
			}, 1500);

			return;
		}

		if (onClick) {
			onClick();
		}
	};

	const content = useMemo(() => {
		return (
			<GradientContainer
				component={EHtmlTag.span}
				className={classNames(styles.gradientContainer, {
					[styles.noPaddingResponsive]: noPaddingResponsive,
					[styles[`${contentColor}`]]: !!contentColor
				})}
				{...gradientContainerProps}
			>
				{children}

				{valueToCopy ? (
					<>
						<div
							className={classNames(styles.iconsContainer, {
								[styles.isActive]: isCopying,
								[styles[`${contentColor}`]]: !!contentColor
							})}
						>
							<MdOutlineContentCopy size={24} />
							<MdOutlineCheck size={24} />
						</div>
					</>
				) : icon ? (
					<div className={classNames(styles.buttonIcon, { [styles[`${iconColor}`]]: !!iconColor })}>{icon}</div>
				) : (
					<></>
				)}
			</GradientContainer>
		);
	}, [children, contentColor, gradientContainerProps, icon, iconColor, isCopying, noPaddingResponsive, valueToCopy]);

	if (href) {
		return (
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				className={classNames(styles.buttonSharedStyles, styles.styledLink, {
					[styles[`${contentColor}`]]: !!contentColor,
					[styles.isSuccess]: !!isCopying
				})}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			className={classNames(styles.buttonSharedStyles, styles.styledButton, {
				[styles[`${contentColor}`]]: !!contentColor,
				[styles.isSuccess]: !!isCopying
			})}
			onClick={() => handleClick()}
		>
			{content}
		</button>
	);
};

export { Button };
