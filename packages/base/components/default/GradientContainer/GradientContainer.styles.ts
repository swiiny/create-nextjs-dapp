import styled, { css } from 'styled-components';
import { Box } from '@mui/system';

export const StyledGradientContainer = styled(Box)`
	${(p) => css`
		position: relative;

		border-radius: 13px;
		background: ${p.theme.colors.darkGradient};
		border: 1px solid ${p.theme.colors.darkGray};
		box-shadow: 0px 5px 20px 10px ${p.theme.colors.black + '50'};
	`}
`;
