import { ReactNode } from 'react';
import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import { BoxProps } from '@mui/system';
import { DefaultTheme } from 'styled-components';

interface IButton extends ButtonUnstyledProps {
	children: ReactNode;
	onClick?: () => void;
	valueToCopy?: string;
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
