import { ResponsiveContext } from '@contexts/ResponsiveContext/ResponsiveContext';
import { useContext } from 'react';

function useResponsive() {
	const context = useContext(ResponsiveContext);
	if (context === undefined) {
		throw new Error('unable to find ResponsiveContext');
	}

	return context;
}

export { useResponsive };
