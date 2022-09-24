import { ReactNode } from 'react';
import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import { BoxProps } from '@mui/system';

interface IButton extends ButtonUnstyledProps {
	children: ReactNode;
	icon?: ReactNode;
	gradientContainerProps?: BoxProps;
}

export type { IButton };
