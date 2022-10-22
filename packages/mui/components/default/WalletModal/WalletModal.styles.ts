import { addTransition } from 'utils/functions';
import styled, { css } from 'styled-components';

export const StyledModalBackground = styled.button<{ isVisible: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 900;

	border: none;
	background-color: transparent;

	display: flex;
	justify-content: center;
	align-items: center;

	${addTransition()}

	& > div {
		position: relative;
		z-index: 901;

		transition: inherit;
	}

	${(p) => css`
		& > div {
			background-color: ${p.theme.colors.black};
			opacity: 0;

			transition: inherit;
		}
	`}

	${(p) =>
		p.isVisible
			? css`
					background-color: ${p.theme.colors.black + '80'};
					& > div {
						opacity: 1;
					}
			  `
			: css`
					background-color: transparent;
					& > div {
						opacity: 0;
					}
			  `}
`;

export const StyledModalButton = styled.button`
	border: none;
	background-color: transparent;
	height: 80px;
	width: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	border-radius: 8px;

	background-color: ${(p) => p.theme.colors.gray + '30'};

	padding: 0 20px;

	cursor: pointer;

	${addTransition()}

	&:hover {
		background-color: ${(p) => p.theme.colors.gray + '40'};
	}

	& > img {
		margin-right: 12px;
	}

	& + button {
		margin-top: 16px;
	}
`;
