import { useEffect, useState } from 'react';
import { IFrames, IUseResponsive } from './useResponsive.type';
import { setLocalStorage, getLocalStorage } from '@utils/global';

const USE_RESPONSIVE_KEY = 'saved-use-responsive';

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

	const savedData = getLocalStorage(USE_RESPONSIVE_KEY) as IUseResponsive | undefined;

	const [screenFrames, setScreenFrames] = useState<IFrames>(savedData?.screenFrames || getResponsive());
	const [isBiggerThanSm, setIsBiggerThanSm] = useState<boolean>(savedData?.isBiggerThanSm || false);
	const [isBiggerThanMd, setIsBiggerThanMd] = useState<boolean>(savedData?.isBiggerThanMd || false);
	const [isBiggerThanLg, setIsBiggerThanLg] = useState<boolean>(savedData?.isBiggerThanLg || false);
	const [isBiggerThanXl, setIsBiggerThanXl] = useState<boolean>(savedData?.isBiggerThanXl || false);

	useEffect(() => {
		clearTimeout(window['use-responsive-timeout']);

		setIsBiggerThanSm(screenFrames.width > mqSm);
		setIsBiggerThanMd(screenFrames.width > mqMd);
		setIsBiggerThanLg(screenFrames.width > mqLg);
		setIsBiggerThanXl(screenFrames.width > mqXl);

		// throttle to prevent too many writes to local storage
		window['use-responsive-timeout'] = setTimeout(() => {
			setLocalStorage(USE_RESPONSIVE_KEY, {
				screenFrames,
				isBiggerThanSm: screenFrames.width > mqSm,
				isBiggerThanMd: screenFrames.width > mqMd,
				isBiggerThanLg: screenFrames.width > mqLg,
				isBiggerThanXl: screenFrames.width > mqXl
			});
		}, 500);
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
