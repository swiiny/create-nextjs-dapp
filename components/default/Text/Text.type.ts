import { ESize } from '@theme/theme.enum';
import { DefaultTheme } from 'styled-components';
import { ETextType } from './Text.enum';

interface IText {
	children: string;
	type?: ETextType;
	size?: ESize.s | ESize.m | ESize.l;
	color?: string;
}

export type { IText };
