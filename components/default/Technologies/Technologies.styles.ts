import { addTransition } from '@utils/functions';
import styled, { css } from 'styled-components';

export const StyledLogoContainer = styled.div`
	${(p) => css`
		position: relative;

		border-radius: 12px;

		${addTransition()}

		&::before {
			content: ' ';
			position: absolute;
			top: -15px;
			left: -20px;
			right: -20px;
			bottom: -15px;
			z-index: -1;

			border-radius: inherit;
			transition: inherit;

			background-color: ${(p) => p.theme.colors.black};
		}

		&:hover {
			opacity: 1 !important;

			transform: scale(1.05);
		}
	`}
`;

export const StyledLink = styled.a`
	position: relative;

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
