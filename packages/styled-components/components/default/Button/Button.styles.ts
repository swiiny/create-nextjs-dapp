import styled, { css } from 'styled-components';
import { EMediaQuery } from 'theme/theme.enum';
import {
	addFramesStyles,
	addHiddenRangesStyles,
	addMarginStyles,
	addPaddingStyles,
	addTransition,
	mq
} from 'utils/functions';
import { EFontWeight } from '../Text/Text.enum';
import { ISharedButtonProps } from './Button.type';

const sharedStyle = (p: ISharedButtonProps) => {
	const isSuccess = p.color === p.theme.colors.success;
	return css`
		position: relative;
		border: none;
		background-color: transparent;

		cursor: pointer;

		font-size: calc(1.5rem * 0.6);

		padding: 0;

		${mq(EMediaQuery.sm, `font-size: calc(1.5rem * 0.7);`)}
		${mq(EMediaQuery.md, `font-size: calc(1.5rem * 0.8);`)}
		${mq(EMediaQuery.lg, `font-size: calc(1.5rem * 0.9);`)}
		${mq(EMediaQuery.xl, `font-size: calc(1.5rem * 1.0);`)}

		${addTransition()}

		& > span {
			font-weight: ${EFontWeight.bold};

			transition: inherit;

			${p.color?.includes('gradient')
				? css`
						background: ${p.color};
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					`
				: `color: ${p.color || p.theme.colors.white};`}

			&:hover {
				transform: scale(1.02);
				color: ${isSuccess ? p.color : p.theme.colors.gray};

				& svg {
					color: ${isSuccess ? p.color : p.theme.colors.gray};
				}
			}

			& svg {
				margin-left: 16px;

				color: ${p.iconColor ? p.iconColor : p.color ? p.color : p.theme.colors.white};

				${addTransition()}

				transform: scale(0.7);
				${mq(EMediaQuery.md, `transform: scale(0.8);`)}
				${mq(EMediaQuery.xl, `transform: scale(1.0);`)}
			}
		}
	`;
};

export const StyledButton = styled.button<ISharedButtonProps>`
	${(p) => css`
		${sharedStyle(p)}
		${addHiddenRangesStyles(p)}
		${addPaddingStyles(p)}
		${addMarginStyles(p)}
		${addFramesStyles(p)}
	`}
`;

export const StyledLink = styled.a<ISharedButtonProps>`
	display: inline-block;

	${(p) => css`
		${sharedStyle(p)}
		${addHiddenRangesStyles(p)}
		${addPaddingStyles(p)}
		${addMarginStyles(p)}
		${addFramesStyles(p)}
	`}
`;

export const StyledIconsContainer = styled.div<{ isActive: boolean }>`
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-left: 20px;

	& > svg {
		position: absolute;
		${addTransition()}

		${(p) =>
			p.isActive
				? css`
						&:nth-child(1) {
							opacity: 0;
							transform: translateX(-50%) rotateX(90deg);
						}
						&:nth-child(2) {
							opacity: 1;
							transform: translateX(0) rotateX(0);
						}
					`
				: css`
						&:nth-child(1) {
							opacity: 1;
							transform: translateX(0) rotateX(0);
						}
						&:nth-child(2) {
							opacity: 0;
							transform: translateX(50%) rotateX(-90deg);
						}
					`}
	}
`;
