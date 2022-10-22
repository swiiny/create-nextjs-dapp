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
	iconColor?: EColor;
	href?: string;
	gradientContainerProps?: IGradientContainer;
}

interface ISharedButtonProps {
	iconColor?: string;
	color?: string;
}

export type { IButton, ISharedButtonProps };
