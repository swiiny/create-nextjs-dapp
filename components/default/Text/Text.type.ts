import { ESize } from '@theme/theme.enum';
import { ReactNode } from 'react';
import { EFontWeight, ETextAlign, ETextType } from './Text.enum';

interface IText {
	component?: ETextType;
	children?: string | ReactNode;
	type?: ETextType;
	weight?: EFontWeight;
	align?: ETextAlign;
	size?: ESize.s | ESize.m | ESize.l;
	color?: string;
}

export type { IText };
