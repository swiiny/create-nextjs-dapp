import { EMediaQuery } from '@theme/theme.enum';
import { mq } from '@utils/functions';
import styled from 'styled-components';

export const StyledMainContainer = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	height: 100vh;

	padding-top: 32px;
	padding-left: 15px;
	padding-right: 15px;

	${mq(EMediaQuery.md, 'padding-left: 32px; padding-right: 32px;')}
	${mq(EMediaQuery.lg, 'padding-left: 64px; padding-right: 64px;')}
`;
