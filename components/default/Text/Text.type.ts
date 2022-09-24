import { ESize } from '@theme/theme.enum';
import { DefaultTheme } from 'styled-components';
import { EFontWeight, ETextType } from './Text.enum';

interface IText {
	as?: string;
	children?: string;
	type?: ETextType;
	weight?: EFontWeight;
	size?: ESize.s | ESize.m | ESize.l;
	color?: string;
}

export type { IText };
