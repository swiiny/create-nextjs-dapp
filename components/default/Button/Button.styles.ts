import styled from 'styled-components';
import { ButtonUnstyled } from '@mui/base';
import { addTransition } from '@utils/functions';

export const StyledButton = styled(ButtonUnstyled)<{ iconColor?: string }>`
	position: relative;
	border: none;
	background-color: transparent;

	cursor: pointer;

	font-size: 1.5rem;

	color: ${(p) => p.theme.colors.white};

	${addTransition()}

	&:hover {
		transform: scale(1.05);
		color: ${(p) => p.theme.colors.gray};

		& svg {
			color: ${(p) => p.theme.colors.gray};
		}
	}

	& svg {
		margin-left: 16px;

		color: ${(p) => (p.iconColor ? p.iconColor : p.theme.colors.white)};

		${addTransition()}
	}
`;
