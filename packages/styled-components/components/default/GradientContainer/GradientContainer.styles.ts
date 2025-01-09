import Flex from '@components/layout/Flex';
import styled, { css } from 'styled-components';

export const StyledGradientContainer = styled(Flex)`
	${(p) => css`
		position: relative;

		border-radius: 13px;
		background: ${p.theme.colors.darkGradient};
		border: 1px solid ${p.theme.colors.darkGray};
		box-shadow: 0px 5px 20px 10px ${p.theme.colors.darkGray + '50'};
	`}
`;
