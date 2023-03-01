import { createContext, FC, useEffect, useState } from 'react';
import { debounce, getResponsive } from './ResponsiveContext.functions';
import { IFrames, IUseResponsive } from './ResponsiveContext.type';

const ResponsiveContext = createContext<IUseResponsive | undefined>(undefined);

const breakpoints = [600, 900, 1200, 1536];

const ResponsiveProvider: FC<{ children: any }> = ({ children }) => {
	const [screenFrames, setScreenFrames] = useState<IFrames>(getResponsive());
	const [isSmallerThanBreakpoint, setIsSmallerThanBreakpoint] = useState<boolean[]>(breakpoints.map(() => false));

	useEffect(() => {
		function handleResize() {
			const newScreenFrames = getResponsive();
			setScreenFrames(newScreenFrames);
			const newIsSmallerThanBreakpoint = breakpoints.map((breakpoint) => newScreenFrames.width > breakpoint);
			setIsSmallerThanBreakpoint(newIsSmallerThanBreakpoint);
		}

		const handleResizeDebounced = debounce(handleResize, 100);

		handleResize();

		window.addEventListener('resize', handleResizeDebounced);

		return () => window.removeEventListener('resize', handleResizeDebounced);
	}, []);

	return (
		<ResponsiveContext.Provider
			value={{
				screenFrames,
				isBiggerThanSm: isSmallerThanBreakpoint[0],
				isBiggerThanMd: isSmallerThanBreakpoint[1],
				isBiggerThanLg: isSmallerThanBreakpoint[2],
				isBiggerThanXl: isSmallerThanBreakpoint[3]
			}}
		>
			{children}
		</ResponsiveContext.Provider>
	);
};

export { ResponsiveProvider, ResponsiveContext };
