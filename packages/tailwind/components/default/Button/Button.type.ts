import { EColor } from '@theme/theme.enum';
import { ReactNode } from 'react';
import { IGradientContainer } from '../GradientContainer/GradientContainer.type';

interface IButton {
	children: ReactNode;
	onClick?: () => void;
	valueToCopy?: string;
	noPaddingResponsive?: boolean;
	icon?: ReactNode;
	color?: EColor;
	href?: string;
	gradientContainerProps?: IGradientContainer;
	customClasses?: string;
}

interface ISharedButtonProps {
	iconColor?: string;
	color?: string;
}

export type { IButton, ISharedButtonProps };
