import { useEffect, useState } from 'react';
import { IFrames, IUseResponsive } from './useResponsive.type';

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

function useResponsive(): IUseResponsive {
	const mqSm: number = 600;
	const mqMd: number = 900;
	const mqLg: number = 1200;
	const mqXl: number = 1536;

	const [screenFrames, setScreenFrames] = useState<IFrames>(getResponsive());
	const [isBiggerThanSm, setIsBiggerThanSm] = useState<boolean>(false);
	const [isBiggerThanMd, setIsBiggerThanMd] = useState<boolean>(false);
	const [isBiggerThanLg, setIsBiggerThanLg] = useState<boolean>(false);
	const [isBiggerThanXl, setIsBiggerThanXl] = useState<boolean>(false);

	useEffect(() => {
		setIsBiggerThanSm(screenFrames.width > mqSm);
		setIsBiggerThanMd(screenFrames.width > mqMd);
		setIsBiggerThanLg(screenFrames.width > mqLg);
		setIsBiggerThanXl(screenFrames.width > mqXl);
	}, [screenFrames]);

	useEffect(() => {
		function handleResize() {
			setScreenFrames(getResponsive());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		screenFrames,
		isBiggerThanSm,
		isBiggerThanMd,
		isBiggerThanLg,
		isBiggerThanXl
	};
}

export { useResponsive };
