import { ButtonProps } from '@mui/base';
import { BoxProps } from '@mui/system';
import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

interface IButton extends ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	valueToCopy?: string;
	noPaddingResponsive?: boolean;
	icon?: ReactNode;
	iconColor?: string;
	gradientContainerProps?: BoxProps;
}

interface ISharedButtonProps {
	theme: DefaultTheme;
	iconColor?: string;
	color?: string;
}

export type { IButton, ISharedButtonProps };
