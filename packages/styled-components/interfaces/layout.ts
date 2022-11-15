import { ESize } from '@theme/theme.enum';

type TSize = ESize | number | string;

interface IPadding {
	padding?: TSize;
	paddingBottom?: TSize;
	paddingTop?: TSize;
	paddingLeft?: TSize;
	paddingRight?: TSize;
	paddingX?: TSize;
	paddingY?: TSize;

	smPadding?: TSize;
	smPaddingBottom?: TSize;
	smPaddingTop?: TSize;
	smPaddingLeft?: TSize;
	smPaddingRight?: TSize;
	smPaddingX?: TSize;
	smPaddingY?: TSize;

	mdPadding?: TSize;
	mdPaddingBottom?: TSize;
	mdPaddingTop?: TSize;
	mdPaddingLeft?: TSize;
	mdPaddingRight?: TSize;
	mdPaddingX?: TSize;
	mdPaddingY?: TSize;

	lgPadding?: TSize;
	lgPaddingBottom?: TSize;
	lgPaddingTop?: TSize;
	lgPaddingLeft?: TSize;
	lgPaddingRight?: TSize;
	lgPaddingX?: TSize;
	lgPaddingY?: TSize;

	xlPadding?: TSize;
	xlPaddingBottom?: TSize;
	xlPaddingTop?: TSize;
	xlPaddingLeft?: TSize;
	xlPaddingRight?: TSize;
	xlPaddingX?: TSize;
	xlPaddingY?: TSize;
}

interface IMargin {
	margin?: TSize;
	marginBottom?: TSize;
	marginTop?: TSize;
	marginLeft?: TSize;
	marginRight?: TSize;
	marginX?: TSize;
	marginY?: TSize;

	smMargin?: TSize;
	smMarginBottom?: TSize;
	smMarginTop?: TSize;
	smMarginLeft?: TSize;
	smMarginRight?: TSize;
	smMarginX?: TSize;
	smMarginY?: TSize;

	mdMargin?: TSize;
	mdMarginBottom?: TSize;
	mdMarginTop?: TSize;
	mdMarginLeft?: TSize;
	mdMarginRight?: TSize;
	mdMarginX?: TSize;
	mdMarginY?: TSize;

	lgMargin?: TSize;
	lgMarginBottom?: TSize;
	lgMarginTop?: TSize;
	lgMarginLeft?: TSize;
	lgMarginRight?: TSize;
	lgMarginX?: TSize;
	lgMarginY?: TSize;

	xlMargin?: TSize;
	xlMarginBottom?: TSize;
	xlMarginTop?: TSize;
	xlMarginLeft?: TSize;
	xlMarginRight?: TSize;
	xlMarginX?: TSize;
	xlMarginY?: TSize;
}

interface IFrames {
	width?: TSize;
	smWidth?: TSize;
	mdWidth?: TSize;
	lgWidth?: TSize;
	xlWidth?: TSize;

	height?: TSize;
	smHeight?: TSize;
	mdHeight?: TSize;
	lgHeight?: TSize;
	xlHeight?: TSize;

	minWidth?: TSize;
	smMinWidth?: TSize;
	mdMinWidth?: TSize;
	lgMinWidth?: TSize;
	xlMinWidth?: TSize;

	maxWidth?: TSize;
	smMaxWidth?: TSize;
	mdMaxWidth?: TSize;
	lgMaxWidth?: TSize;
	xlMaxWidth?: TSize;

	minHeight?: TSize;
	smMinHeight?: TSize;
	mdMinHeight?: TSize;
	lgMinHeight?: TSize;
	xlMinHeight?: TSize;

	maxHeight?: TSize;
	smMaxHeight?: TSize;
	mdMaxHeight?: TSize;
	lgMaxHeight?: TSize;
	xlMaxHeight?: TSize;
}

interface IVisibility {
	hidden?: boolean;
	smHidden?: boolean;
	mdHidden?: boolean;
	lgHidden?: boolean;
	xlHidden?: boolean;

	visible?: boolean;
	smVisible?: boolean;
	mdVisible?: boolean;
	lgVisible?: boolean;
	xlVisible?: boolean;

	display?: string;
}

export type { TSize, IPadding, IMargin, IFrames, IVisibility };
