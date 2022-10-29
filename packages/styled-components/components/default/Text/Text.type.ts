import { ESize } from 'theme/theme.enum';
import { ReactNode } from 'react';
import { EFontWeight, ETextAlign, ETextType } from './Text.enum';
import { IMargin, IPadding } from '@interfaces/layout';

interface IText extends IMargin, IPadding {
	component?: ETextType;
	children?: string | ReactNode;
	type?: ETextType;
	weight?: EFontWeight;
	align?: ETextAlign;
	size?: ESize.s | ESize.m | ESize.l;
	color?: string;
}

export type { IText };
