import { EMediaQuery } from '@theme/theme.enum';
import { FlattenSimpleInterpolation } from 'styled-components';

// media queries
export const mq = (mediaQuery: EMediaQuery, children: string | FlattenSimpleInterpolation, minOrMax = 'min') => {
	return `@media only screen and (${minOrMax}-width: ${mediaQuery}) {
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

// copy value to clipboard
export const copy = (value: string) => {
	try {
		const copyText = document.createElement('input');
		copyText.setAttribute('value', value);

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */

		/* Copy the text inside the text field */
		navigator.clipboard.writeText(copyText.value);
		return true;
	} catch {
		return false;
	}
};
