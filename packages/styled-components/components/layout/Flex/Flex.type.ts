import { IFrames, IMargin, IPadding } from '@interfaces/layout';
import { ESize } from '@theme/theme.enum';
import React from 'react';
import { CSSProp } from 'styled-components';
import { EFlex } from './Flex.enum';

interface IFlex extends IPadding, IMargin, IFrames {
	children?: React.ReactNode | React.ReactNode[];
	fullWidth?: boolean;
	fullHeight?: boolean;
	wrapItems?: boolean;
	as?: any;
	forwardedAs?: any;
	id?: string;
	style?: CSSProp;

	direction?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
	horizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	vertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	gap?: ESize | number | string;

	// responsive
	smGap?: ESize | number | string;
	mdGap?: ESize | number | string;
	lgGap?: ESize | number | string;
	xlGap?: ESize | number | string;

	smDirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
	mdDirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
	lgDirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
	xlDirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;

	smHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	mdHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	lgHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	xlHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;

	smVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	mdVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	lgVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
	xlVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;

	onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type { IFlex };
