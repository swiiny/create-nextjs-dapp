import { Web3Context } from '@contexts/Web3Context/Web3Context';
import { useContext } from 'react';

export function useWeb3() {
	const context = useContext(Web3Context);
	if (context === undefined) {
		throw new Error('unable to find Web3Context');
	}

	return context;
}
