import { IHiddenRanges, IMargin, IPadding } from '@interfaces/layout';
import { ReactNode } from 'react';
import { ESize } from 'theme/theme.enum';
import { EFontWeight, ETextAlign, ETextType } from './Text.enum';

interface IText extends IMargin, IPadding, IHiddenRanges {
	component?: ETextType;
	children?: string | ReactNode;
	type?: ETextType;
	weight?: EFontWeight;
	align?: ETextAlign;
	size?: ESize.s | ESize.m | ESize.l;
	color?: string;
}

export type { IText };
