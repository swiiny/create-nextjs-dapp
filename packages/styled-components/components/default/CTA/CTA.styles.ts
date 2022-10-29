import Flex from '@components/layout/Flex';
import { EMediaQuery } from '@theme/theme.enum';
import { mq } from '@utils/functions';
import styled from 'styled-components';
import Text from '../Text';

export const StyledCTA = styled(Flex)`
	${mq(EMediaQuery.sm, 'transform: scale(0.9);', 'max')}
`;

export const TextEx = styled(Text)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
