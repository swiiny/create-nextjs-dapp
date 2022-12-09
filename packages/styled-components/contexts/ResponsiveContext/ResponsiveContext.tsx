import { createContext, FC, useEffect, useState } from 'react';
import { IFrames, IUseResponsive } from './ResponsiveContext.type';

export const ResponsiveContext = createContext<IUseResponsive | undefined>(undefined);

const mqSm: number = 600;
const mqMd: number = 900;
const mqLg: number = 1200;
const mqXl: number = 1536;

function getResponsive(): IFrames {
	if (typeof window === 'undefined') {
		return {
			width: 1200,
			height: 900
		};
	}

	const { innerWidth: width, innerHeight: height } = window;

	return {
		width,
		height
	};
}

const ResponsiveProvider: FC<{ children: any }> = ({ children }) => {
	const [screenFrames, setScreenFrames] = useState<IFrames>(getResponsive());
	const [isBiggerThanSm, setIsBiggerThanSm] = useState<boolean | undefined>(undefined);
	const [isBiggerThanMd, setIsBiggerThanMd] = useState<boolean | undefined>(undefined);
	const [isBiggerThanLg, setIsBiggerThanLg] = useState<boolean | undefined>(undefined);
	const [isBiggerThanXl, setIsBiggerThanXl] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		function handleResize() {
			const newScreenFrames = getResponsive();
			setScreenFrames(newScreenFrames);
			setIsBiggerThanSm(newScreenFrames.width > mqSm);
			setIsBiggerThanMd(newScreenFrames.width > mqMd);
			setIsBiggerThanLg(newScreenFrames.width > mqLg);
			setIsBiggerThanXl(newScreenFrames.width > mqXl);
		}

		setTimeout(() => {
			handleResize();
		}, 100);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<ResponsiveContext.Provider
			value={{
				screenFrames,
				isBiggerThanSm,
				isBiggerThanMd,
				isBiggerThanLg,
				isBiggerThanXl
			}}
		>
			{children}
		</ResponsiveContext.Provider>
	);
};

export { ResponsiveProvider };
