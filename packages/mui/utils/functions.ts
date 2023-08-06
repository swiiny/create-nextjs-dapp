import { EMediaQuery } from '@theme/theme.enum';
import { CSSProp } from 'styled-components';

// media queries
export const mq = (mediaQuery: EMediaQuery, children: string | CSSProp, minOrMax = 'min') => {
	return `@media only screen and (${minOrMax}-width: ${mediaQuery}) {
		${children}
	}`;
};

export const mqV = (mediaQuery: EMediaQuery | string, children: string | CSSProp, minOrMax = 'min') => {
	return `@media only screen and (${minOrMax}-height: ${mediaQuery}) {
		${children}
	}`;
};

// add transition
export const addTransition = (
	target: string = 'all',
	duration: number = 0.4,
	delay: number = 0,
	timingFunction: string = 'ease'
) => {
	return `
		@media screen and (prefers-reduced-motion: no-preference) {
			transition: ${target} ${duration}s ${delay + 's'} ${timingFunction};
		}
	`;
};
