import { StyleXStyles } from '@stylexjs/stylex';
import { ReactNode } from 'react';

interface IButton {
	children: ReactNode;
	onClick?: () => void;
	valueToCopy?: string;
	href?: string;
	icon?: ReactNode;
	style?: StyleXStyles;
}

export type { IButton };
