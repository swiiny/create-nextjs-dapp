import { FC, useMemo, useState } from 'react';
import { MdOutlineCheck, MdOutlineContentCopy } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { copy } from 'utils/global';
import GradientContainer from '../GradientContainer';
import { StyledButton, StyledIconsContainer, StyledLink } from './Button.styles';
import { IButton } from './Button.type';

const Button: FC<IButton> = ({
	children,
	onClick,
	href,
	noPaddingResponsive = false,
	valueToCopy,
	color,
	icon,
	iconColor,
	gradientContainerProps,
	...otherProps
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
				paddingY={noPaddingResponsive ? '12px' : { xs: '6px', sm: '9px', md: '12px' }}
				paddingX={noPaddingResponsive ? '36px' : { xs: '18px', sm: '27px', md: '36px' }}
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
	}, [children, gradientContainerProps, icon, isCopying, valueToCopy, noPaddingResponsive]);

	if (href) {
		return (
			<StyledLink href={href} target='_blank' rel='noopener noreferrer' color={color} iconColor={iconColor}>
				{content}
			</StyledLink>
		);
	}

	return (
		<StyledButton onClick={() => handleClick()} color={contentColor} iconColor={iconColor} {...otherProps}>
			{content}
		</StyledButton>
	);
};

export { Button };
