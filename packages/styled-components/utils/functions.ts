import { TSize } from '@interfaces/layout';
import { defaultTheme } from '@theme/theme';
import { EMediaQuery, ESize } from '@theme/theme.enum';
import { FlattenSimpleInterpolation } from 'styled-components';
import { THiddenRange } from 'types/functions.type';

// media queries
export const mq = (
	mediaQuery: EMediaQuery | string,
	children: string | FlattenSimpleInterpolation,
	minOrMax = 'min'
) => {
	return `@media only screen and (${minOrMax}-width: ${mediaQuery}) {
		${children}
	}`;
};

export const mqRange = (
	minWidth: EMediaQuery | string,
	maxWidth: EMediaQuery | string,
	children: string | FlattenSimpleInterpolation
) => {
	return `@media only screen and (min-width: ${minWidth}) and (max-width: ${maxWidth}) {
		${children}
	}`;
};

export const mqV = (
	mediaQuery: EMediaQuery | string,
	children: string | FlattenSimpleInterpolation,
	minOrMax = 'min'
) => {
	return `@media only screen and (${minOrMax}-height: ${mediaQuery}) {
		${children}
	}`;
};

/**
 * get a size value as string from a number, a string or an ESize enum
 * @param size the size to get
 * @returns if size is a number, returns a string with the size + 'px', if size is a string, returns the string, if size is an ESize enum, returns the value of the enum
 */
export const getSpacing = (size: TSize): string => {
	try {
		// check if size is part of ESize
		if (Object.values(ESize).includes(size as ESize)) {
			return defaultTheme.spacing[size as ESize];
		}

		// check if size is a number
		if (typeof size === 'number') {
			return `${size}px`;
		}

		// check if size is a string
		if (typeof size === 'string') {
			return size;
		}

		return '';
	} catch (err) {
		console.error('getSpacing', err);
		return '';
	}
};

// add transition
export const addTransition = (
	target: string = 'all',
	duration: number = 0.4,
	delay: number = 0,
	timingFunction: string = 'ease'
) => {
	return `
		@media screen and (prefers-reduced-motion: no-preference) {
			transition: ${target} ${duration}s ${delay + 's'} ${timingFunction};
		}
	`;
};

export const addPaddingStyles = (p: any) => {
	return `
		${p.padding ? `padding: ${getSpacing(p.padding)};` : ''}
		${p.paddingX ? `padding-left: ${getSpacing(p.paddingX)}; padding-right: ${getSpacing(p.paddingX)};` : ''}
		${p.paddingY ? `padding-top: ${getSpacing(p.paddingY)}; padding-bottom: ${getSpacing(p.paddingY)};` : ''}
		${p.paddingTop ? `padding-top: ${getSpacing(p.paddingTop)};` : ''}
		${p.paddingBottom ? `padding-bottom: ${getSpacing(p.paddingBottom)};` : ''}
		${p.paddingLeft ? `padding-left: ${getSpacing(p.paddingLeft)};` : ''}
		${p.paddingRight ? `padding-right: ${getSpacing(p.paddingRight)};` : ''}

		${p.smPadding ? mq(EMediaQuery.sm, `padding: ${getSpacing(p.smPadding)};`) : ''}
			${
				p.smPaddingX
					? mq(EMediaQuery.sm, `padding-left: ${getSpacing(p.smPaddingX)}; padding-right: ${getSpacing(p.smPaddingX)};`)
					: ''
			}
		${
			p.smPaddingY
				? mq(EMediaQuery.sm, `padding-top: ${getSpacing(p.smPaddingY)}; padding-bottom: ${getSpacing(p.smPaddingY)};`)
				: ''
		}
		${p.smPaddingTop ? mq(EMediaQuery.sm, `padding-top: ${getSpacing(p.smPaddingTop)};`) : ''}
		${p.smPaddingBottom ? mq(EMediaQuery.sm, `padding-bottom: ${getSpacing(p.smPaddingBottom)};`) : ''}
		${p.smPaddingLeft ? mq(EMediaQuery.sm, `padding-left: ${getSpacing(p.smPaddingLeft)};`) : ''}
		${p.smPaddingRight ? mq(EMediaQuery.sm, `padding-right: ${getSpacing(p.smPaddingRight)};`) : ''}

		
	${p.mdPadding ? mq(EMediaQuery.md, `padding: ${getSpacing(p.mdPadding)};`) : ''}
			${
				p.mdPaddingX
					? mq(EMediaQuery.md, `padding-left: ${getSpacing(p.mdPaddingX)}; padding-right: ${getSpacing(p.mdPaddingX)};`)
					: ''
			}
		${
			p.mdPaddingY
				? mq(EMediaQuery.md, `padding-top: ${getSpacing(p.mdPaddingY)}; padding-bottom: ${getSpacing(p.mdPaddingY)};`)
				: ''
		}
		${p.mdPaddingTop ? mq(EMediaQuery.md, `padding-top: ${getSpacing(p.mdPaddingTop)};`) : ''}
		${p.mdPaddingBottom ? mq(EMediaQuery.md, `padding-bottom: ${getSpacing(p.mdPaddingBottom)};`) : ''}
		${p.mdPaddingLeft ? mq(EMediaQuery.md, `padding-left: ${getSpacing(p.mdPaddingLeft)};`) : ''}
		${p.mdPaddingRight ? mq(EMediaQuery.md, `padding-right: ${getSpacing(p.mdPaddingRight)};`) : ''}

			${p.lgPadding ? mq(EMediaQuery.lg, `padding: ${getSpacing(p.lgPadding)};`) : ''}
			${
				p.lgPaddingX
					? mq(EMediaQuery.lg, `padding-left: ${getSpacing(p.lgPaddingX)}; padding-right: ${getSpacing(p.lgPaddingX)};`)
					: ''
			}
		${
			p.lgPaddingY
				? mq(EMediaQuery.lg, `padding-top: ${getSpacing(p.lgPaddingY)}; padding-bottom: ${getSpacing(p.lgPaddingY)};`)
				: ''
		}
		${p.lgPaddingTop ? mq(EMediaQuery.lg, `padding-top: ${getSpacing(p.lgPaddingTop)};`) : ''}
		${p.lgPaddingBottom ? mq(EMediaQuery.lg, `padding-bottom: ${getSpacing(p.lgPaddingBottom)};`) : ''}
		${p.lgPaddingLeft ? mq(EMediaQuery.lg, `padding-left: ${getSpacing(p.lgPaddingLeft)};`) : ''}
		${p.lgPaddingRight ? mq(EMediaQuery.lg, `padding-right: ${getSpacing(p.lgPaddingRight)};`) : ''}

		${p.xlPadding ? mq(EMediaQuery.xl, `padding: ${getSpacing(p.xlPadding)};`) : ''}
		${
			p.xlPaddingX
				? mq(EMediaQuery.xl, `padding-left: ${getSpacing(p.xlPaddingX)}; padding-right: ${getSpacing(p.xlPaddingX)};`)
				: ''
		}
		${
			p.xlPaddingY
				? mq(EMediaQuery.xl, `padding-top: ${getSpacing(p.xlPaddingY)}; padding-bottom: ${getSpacing(p.xlPaddingY)};`)
				: ''
		}
		${p.xlPaddingTop ? mq(EMediaQuery.xl, `padding-top: ${getSpacing(p.xlPaddingTop)};`) : ''}
		${p.xlPaddingBottom ? mq(EMediaQuery.xl, `padding-bottom: ${getSpacing(p.xlPaddingBottom)};`) : ''}
		${p.xlPaddingLeft ? mq(EMediaQuery.xl, `padding-left: ${getSpacing(p.xlPaddingLeft)};`) : ''}
		${p.xlPaddingRight ? mq(EMediaQuery.xl, `padding-right: ${getSpacing(p.xlPaddingRight)};`) : ''}
	`;
};

export const addMarginStyles = (p: any) => {
	return `
		${p.margin ? `margin: ${getSpacing(p.margin)};` : ''}
		${p.marginX ? `margin-left: ${getSpacing(p.marginX)}; margin-right: ${getSpacing(p.marginX)};` : ''}
		${p.marginY ? `margin-top: ${getSpacing(p.marginY)}; margin-bottom: ${getSpacing(p.marginY)};` : ''}
		${p.marginTop ? `margin-top: ${getSpacing(p.marginTop)};` : ''}
		${p.marginBottom ? `margin-bottom: ${getSpacing(p.marginBottom)};` : ''}
		${p.marginLeft ? `margin-left: ${getSpacing(p.marginLeft)};` : ''}
		${p.marginRight ? `margin-right: ${getSpacing(p.marginRight)};` : ''}


		${p.smMargin ? mq(EMediaQuery.sm, `margin: ${getSpacing(p.smMargin)};`) : ''}
			${
				p.smMarginX
					? mq(EMediaQuery.sm, `margin-left: ${getSpacing(p.smMarginX)}; margin-right: ${getSpacing(p.smMarginX)};`)
					: ''
			}
		${
			p.smMarginY
				? mq(EMediaQuery.sm, `margin-top: ${getSpacing(p.smMarginY)}; margin-bottom: ${getSpacing(p.smMarginY)};`)
				: ''
		}
		${p.smMarginTop ? mq(EMediaQuery.sm, `margin-top: ${getSpacing(p.smMarginTop)};`) : ''}
		${p.smMarginBottom ? mq(EMediaQuery.sm, `margin-bottom: ${getSpacing(p.smMarginBottom)};`) : ''}
		${p.smMarginLeft ? mq(EMediaQuery.sm, `margin-left: ${getSpacing(p.smMarginLeft)};`) : ''}
		${p.smMarginRight ? mq(EMediaQuery.sm, `margin-right: ${getSpacing(p.smMarginRight)};`) : ''}
		
		${p.mdMargin ? mq(EMediaQuery.md, `margin: ${getSpacing(p.mdMargin)};`) : ''}
			${
				p.mdMarginX
					? mq(EMediaQuery.md, `margin-left: ${getSpacing(p.mdMarginX)}; margin-right: ${getSpacing(p.mdMarginX)};`)
					: ''
			}
		${
			p.mdMarginY
				? mq(EMediaQuery.md, `margin-top: ${getSpacing(p.mdMarginY)}; margin-bottom: ${getSpacing(p.mdMarginY)};`)
				: ''
		}
		${p.mdMarginTop ? mq(EMediaQuery.md, `margin-top: ${getSpacing(p.mdMarginTop)};`) : ''}
		${p.mdMarginBottom ? mq(EMediaQuery.md, `margin-bottom: ${getSpacing(p.mdMarginBottom)};`) : ''}
		${p.mdMarginLeft ? mq(EMediaQuery.md, `margin-left: ${getSpacing(p.mdMarginLeft)};`) : ''}
		${p.mdMarginRight ? mq(EMediaQuery.md, `margin-right: ${getSpacing(p.mdMarginRight)};`) : ''}



		${p.lgMargin ? mq(EMediaQuery.lg, `margin: ${getSpacing(p.lgMargin)};`) : ''}
		${
			p.lgMarginX
				? mq(EMediaQuery.lg, `margin-left: ${getSpacing(p.lgMarginX)}; margin-right: ${getSpacing(p.lgMarginX)};`)
				: ''
		}
		${
			p.lgMarginY
				? mq(EMediaQuery.lg, `margin-top: ${getSpacing(p.lgMarginY)}; margin-bottom: ${getSpacing(p.lgMarginY)};`)
				: ''
		}
		${p.lgMarginTop ? mq(EMediaQuery.lg, `margin-top: ${getSpacing(p.lgMarginTop)};`) : ''}
		${p.lgMarginBottom ? mq(EMediaQuery.lg, `margin-bottom: ${getSpacing(p.lgMarginBottom)};`) : ''}
		${p.lgMarginLeft ? mq(EMediaQuery.lg, `margin-left: ${getSpacing(p.lgMarginLeft)};`) : ''}
		${p.lgMarginRight ? mq(EMediaQuery.lg, `margin-right: ${getSpacing(p.lgMarginRight)};`) : ''}

		${p.xlMargin ? mq(EMediaQuery.xl, `margin: ${getSpacing(p.xlMargin)};`) : ''}
		${
			p.xlMarginX
				? mq(EMediaQuery.xl, `margin-left: ${getSpacing(p.xlMarginX)}; margin-right: ${getSpacing(p.xlMarginX)};`)
				: ''
		}
		${
			p.xlMarginY
				? mq(EMediaQuery.xl, `margin-top: ${getSpacing(p.xlMarginY)}; margin-bottom: ${getSpacing(p.xlMarginY)};`)
				: ''
		}
		${p.xlMarginTop ? mq(EMediaQuery.xl, `margin-top: ${getSpacing(p.xlMarginTop)};`) : ''}
		${p.xlMarginBottom ? mq(EMediaQuery.xl, `margin-bottom: ${getSpacing(p.xlMarginBottom)};`) : ''}
		${p.xlMarginLeft ? mq(EMediaQuery.xl, `margin-left: ${getSpacing(p.xlMarginLeft)};`) : ''}
		${p.xlMarginRight ? mq(EMediaQuery.xl, `margin-right: ${getSpacing(p.xlMarginRight)};`) : ''}
	`;
};

export const addFramesStyles = (p: any) => {
	return `
		${p.width ? `width: ${getSpacing(p.width)};` : ''}
		${p.height ? `height: ${getSpacing(p.height)};` : ''}
		${p.minWidth ? `min-width: ${getSpacing(p.minWidth)};` : ''}
		${p.maxWidth ? `max-width: ${getSpacing(p.maxWidth)};` : ''}
		${p.minHeight ? `min-height: ${getSpacing(p.minHeight)};` : ''}
		${p.maxHeight ? `max-height: ${getSpacing(p.maxHeight)};` : ''}

		${p.smWidth ? mq(EMediaQuery.sm, `width: ${getSpacing(p.smWidth)};`) : ''}
		${p.smHeight ? mq(EMediaQuery.sm, `height: ${getSpacing(p.smHeight)};`) : ''}
		${p.smMinWidth ? mq(EMediaQuery.sm, `min-width: ${getSpacing(p.smMinWidth)};`) : ''}
		${p.smMaxWidth ? mq(EMediaQuery.sm, `max-width: ${getSpacing(p.smMaxWidth)};`) : ''}
		${p.smMinHeight ? mq(EMediaQuery.sm, `min-height: ${getSpacing(p.smMinHeight)};`) : ''}
		${p.smMaxHeight ? mq(EMediaQuery.sm, `max-height: ${getSpacing(p.smMaxHeight)};`) : ''}

		${p.mdWidth ? mq(EMediaQuery.md, `width: ${getSpacing(p.mdWidth)};`) : ''}
		${p.mdHeight ? mq(EMediaQuery.md, `height: ${getSpacing(p.mdHeight)};`) : ''}
		${p.mdMinWidth ? mq(EMediaQuery.md, `min-width: ${getSpacing(p.mdMinWidth)};`) : ''}
		${p.mdMaxWidth ? mq(EMediaQuery.md, `max-width: ${getSpacing(p.mdMaxWidth)};`) : ''}
		${p.mdMinHeight ? mq(EMediaQuery.md, `min-height: ${getSpacing(p.mdMinHeight)};`) : ''}
		${p.mdMaxHeight ? mq(EMediaQuery.md, `max-height: ${getSpacing(p.mdMaxHeight)};`) : ''}

		${p.lgWidth ? mq(EMediaQuery.lg, `width: ${getSpacing(p.lgWidth)};`) : ''}
		${p.lgHeight ? mq(EMediaQuery.lg, `height: ${getSpacing(p.lgHeight)};`) : ''}
		${p.lgMinWidth ? mq(EMediaQuery.lg, `min-width: ${getSpacing(p.lgMinWidth)};`) : ''}
		${p.lgMaxWidth ? mq(EMediaQuery.lg, `max-width: ${getSpacing(p.lgMaxWidth)};`) : ''}
		${p.lgMinHeight ? mq(EMediaQuery.lg, `min-height: ${getSpacing(p.lgMinHeight)};`) : ''}
		${p.lgMaxHeight ? mq(EMediaQuery.lg, `max-height: ${getSpacing(p.lgMaxHeight)};`) : ''}

		${p.xlWidth ? mq(EMediaQuery.xl, `width: ${getSpacing(p.xlWidth)};`) : ''}
		${p.xlHeight ? mq(EMediaQuery.xl, `height: ${getSpacing(p.xlHeight)};`) : ''}
		${p.xlMinWidth ? mq(EMediaQuery.xl, `min-width: ${getSpacing(p.xlMinWidth)};`) : ''}
		${p.xlMaxWidth ? mq(EMediaQuery.xl, `max-width: ${getSpacing(p.xlMaxWidth)};`) : ''}
		${p.xlMinHeight ? mq(EMediaQuery.xl, `min-height: ${getSpacing(p.xlMinHeight)};`) : ''}
		${p.xlMaxHeight ? mq(EMediaQuery.xl, `max-height: ${getSpacing(p.xlMaxHeight)};`) : ''}
	`;
};

// the css rule for not displaying an element on the page
const displayNoneRule = `display: none;`;

export const displayNone = (ranges: THiddenRange[]) => {
	const queries = [];
	for (const range of ranges) {
		if (range === undefined || (range[0] === undefined && range[1] === undefined)) {
			queries.push(displayNoneRule);
		} else {
			let query = '';

			if (range[0] === undefined && range[1]) {
				query = mq(range[1], displayNoneRule, 'min');
			} else if (range[1] === undefined && range[0]) {
				query = mq(range[0], displayNoneRule, 'max');
			} else if (range[0] && range[1]) {
				query = mqRange(range[0], range[1], displayNoneRule);
			}

			queries.push(`
				${query}
			`);
		}
	}

	return queries.join(';');
};

export const addHiddenRangesStyles = (p: any) => {
	if (p.hiddenRange?.length) {
		return displayNone([p.hiddenRange]);
	}

	if (!p.hiddenRanges?.length) return ``;

	return displayNone(p.hiddenRanges);
};
