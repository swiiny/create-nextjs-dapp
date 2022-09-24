import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonUnstyled } from '@mui/base';
import { addTransition } from '@utils/functions';
import { ISharedButtonProps } from './Button.type';
import { EFontWeight } from '../Text/Text.enum';

const sharedStyle = (p: ISharedButtonProps) => {
	const isSuccess = p.color === p.theme.colors.success;
	return css`
		position: relative;
		border: none;
		background-color: transparent;

		cursor: pointer;

		font-size: 1.5rem;

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
			}
		}
	`;
};

export const StyledButton = styled(ButtonUnstyled)<ISharedButtonProps>`
	${(p) => sharedStyle(p)}
`;

export const StyledLink = styled.a<ISharedButtonProps>`
	display: inline-block;
	${(p) => sharedStyle(p)}

	& + a {
		margin-left: 16px;
	}
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
