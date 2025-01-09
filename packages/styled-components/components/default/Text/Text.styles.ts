import styled, { css } from 'styled-components';
import { EMediaQuery, ESize } from 'theme/theme.enum';
import { addHiddenRangesStyles, addMarginStyles, addPaddingStyles, mq } from 'utils/functions';
import { ETextAlign, ETextType } from './Text.enum';
import { IText } from './Text.type';

export const StyledText = styled.p<IText>`
	${(p) => css`
		position: relative;

		${p.color?.includes('gradient')
			? css`
					background: ${p.color};
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				`
			: `color: ${p.color || p.theme.colors.white};`}

		${p.weight ? `font-weight: ${p.weight};` : ''}
		${p.align ? `text-align: ${p.align};` : ''}
		${p.align === ETextAlign.center ? `width: 100%;` : ''}

		${addMarginStyles(p)}
		${addPaddingStyles(p)}
		${addHiddenRangesStyles(p)}

		${() => {
			let fontSize: number = 1;
			switch (p.component) {
				case ETextType.h1:
					fontSize = 3;
					break;
				case ETextType.h2:
					fontSize = 2.5;
					break;
				case ETextType.h3:
					fontSize = 2;
					break;
				case ETextType.h4:
					fontSize = 1.5;
					break;
				case ETextType.h5:
					fontSize = 1.25;
					break;
				case ETextType.h6:
					fontSize = 1;
					break;
				case ETextType.p:
					fontSize = 1;
					break;
				case ETextType.span:
					// the span inherit the font-size from the parent
					return '';
				default:
					fontSize = 1;
					break;
			}

			switch (p.size) {
				case ESize.s:
					fontSize = fontSize * 0.75;
					break;
				case ESize.m:
					fontSize = fontSize * 1;
					break;
				case ESize.l:
					fontSize = fontSize * 1.25;
					break;
				default:
					fontSize = fontSize * 1;
					break;
			}

			return css`
				font-size: calc(${fontSize}rem * 0.7);

				${mq(EMediaQuery.sm, `font-size: calc(${fontSize}rem * 0.7);`)}
				${mq(EMediaQuery.md, `font-size: calc(${fontSize}rem * 0.8);`)}
				${mq(EMediaQuery.lg, `font-size: calc(${fontSize}rem * 0.9);`)}
				${mq(EMediaQuery.xl, `font-size: calc(${fontSize}rem * 1.0);`)}
			`;
		}}
	`}
`;
