import { EFlex } from '@components/layout/Flex/Flex.enum';
import { ESize } from '@theme/theme.enum';
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
				forwardedAs='span'
				paddingY={noPaddingResponsive ? ESize['3xs'] : 6}
				smPaddingY={noPaddingResponsive ? undefined : 9}
				mdPaddingY={noPaddingResponsive ? undefined : 12}
				paddingX={noPaddingResponsive ? 36 : 18}
				smPaddingX={noPaddingResponsive ? undefined : 27}
				mdPaddingX={noPaddingResponsive ? undefined : 36}
				horizontal={EFlex.center}
				vertical={EFlex.center}
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
			<StyledLink
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				color={color}
				iconColor={iconColor}
				{...otherProps}
			>
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
