import React, { FC, useMemo, useState } from 'react';
import { IButton } from './Button.type';
import { StyledButton, StyledIconsContainer, StyledLink } from './Button.styles';
import GradientContainer from '../GradientContainer';
import { MdOutlineContentCopy, MdOutlineCheck } from 'react-icons/md';
import { copy } from '@utils/functions';
import { useTheme } from 'styled-components';

const Button: FC<IButton> = ({
	children,
	onClick,
	href,
	valueToCopy,
	color,
	icon,
	iconColor,
	gradientContainerProps
}) => {
	const theme = useTheme();
	const [isCopying, setIsCopying] = useState(false);

	const contentColor = isCopying ? theme.colors.success : color;

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
				component='span'
				paddingY='12px'
				paddingX='36px'
				display='flex'
				sx={{ justifyContent: 'center', alignItems: 'center' }}
				{...gradientContainerProps}
			>
				{children}

				{valueToCopy ? (
					<>
						<StyledIconsContainer isActive={isCopying}>
							<MdOutlineContentCopy size={24} />
							<MdOutlineCheck size={24} />
						</StyledIconsContainer>
					</>
				) : icon ? (
					icon
				) : (
					<></>
				)}
			</GradientContainer>
		);
	}, [children, gradientContainerProps, icon, isCopying, valueToCopy]);

	if (href) {
		return (
			<StyledLink href={href} target='_blank' rel='noopener noreferrer' color={color} iconColor={iconColor}>
				{content}
			</StyledLink>
		);
	}

	return (
		<StyledButton onClick={() => handleClick()} color={contentColor} iconColor={iconColor}>
			{content}
		</StyledButton>
	);
};

export { Button };
