import { EMediaQuery } from '@theme/theme.enum';
import { mq } from '@utils/functions';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;

	display: flex;
	justify-content: flex-end;

	width: 100%;

	padding: 1rem;

	${mq(EMediaQuery.sm, 'justify-content: space-between;')}
	${mq(EMediaQuery.md, 'padding: 2rem;')}
`;
