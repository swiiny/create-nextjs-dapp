import { FC } from 'react';
import { StyledFlex } from './Flex.styles';
import { IFlex } from './Flex.type';

// see IFlex to see all Flex props
const Flex: FC<IFlex> = ({ children, ...otherProps }) => {
	return <StyledFlex {...otherProps}>{children}</StyledFlex>;
};

export { Flex };
