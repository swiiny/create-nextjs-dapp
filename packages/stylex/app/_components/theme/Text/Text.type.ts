import { StyleXStyles } from '@stylexjs/stylex';
import { EColor, ESize } from '../../../../styles/theme.enum';
import { EFontWeight, ETextAlign, ETextType } from './Text.enum';

interface IText {
	component?: ETextType;
	type?: ETextType;
	weight?: EFontWeight;
	align?: ETextAlign;
	size?: ESize.s | ESize.m | ESize.l;
	color?: EColor;
	style?: StyleXStyles;
}

export type { IText };
