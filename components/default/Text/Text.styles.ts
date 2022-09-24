import { ESize } from '@theme/theme.enum';
import styled, { css } from 'styled-components';
import { EFontWeight, ETextType } from './Text.enum';
import { IText } from './Text.type';

export const StyledText = styled.div<IText>`
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

		${() => {
			let fontSize: number = 1;
			switch (p.as) {
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
					fontSize = 1;
					break;
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
				font-size: ${fontSize}rem;
			`;
		}}
	`}
`;
