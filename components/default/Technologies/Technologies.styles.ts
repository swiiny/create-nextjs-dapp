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
			box-shadow: inset 0px -0px 60px -5px ${p.theme.colors.darkGray + '00'},
				inset 0px -0px 3px ${p.theme.colors.gray + '00'}, inset -0px 0px 5px -4px ${p.theme.colors.darkGray + '00'};
		}

		&:hover {
			opacity: 1 !important;

			transform: scale(1.05);

			&::before {
				box-shadow: inset -8px -8px 60px -5px ${p.theme.colors.darkGray + '80'},
					inset 4px -4px 3px ${p.theme.colors.gray + '20'}, inset -7px 7px 5px -4px ${p.theme.colors.darkGray};
			}
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
