import styled, { css } from 'styled-components';
import { ButtonUnstyled } from '@mui/base';
import { addTransition } from '@utils/functions';

export const StyledButton = styled(ButtonUnstyled)<{ iconColor?: string }>`
	${(p) => css`
		position: relative;
		border: none;
		background-color: transparent;

		cursor: pointer;

		font-size: 1.5rem;

		//color: ${p.theme.colors.white};

		${addTransition()}

		${p.color?.includes('gradient')
			? css`
					background: ${p.color};
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
			  `
			: `color: ${p.color || p.theme.colors.white};`}

	&:hover {
			transform: scale(1.02);
			color: ${p.theme.colors.gray};

			& svg {
				color: ${p.theme.colors.gray};
			}
		}

		& svg {
			margin-left: 16px;

			color: ${p.iconColor ? p.iconColor : p.color ? p.color : p.theme.colors.white};

			${addTransition()}
		}
	`}
`;
