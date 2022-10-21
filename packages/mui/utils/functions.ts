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

export function getLocalStorage(key: string): string | Object | null {
	if (typeof window === 'undefined') {
		return null;
	}

	let item = localStorage.getItem(key);

	if (item) {
		try {
			// test if item is a stringyfied object
			item = JSON.parse(item);
		} catch {
			// is a string
			return item;
		}

		// return the parsed object
		return item;
	}

	return null;
}

export function setLocalStorage(key: string, value: string | Object): void {
	try {
		let toSaveValue = value;

		if (typeof toSaveValue === 'object') {
			toSaveValue = JSON.stringify(value);
		}

		localStorage.setItem(key, toSaveValue as string);
	} catch (err) {
		console.error('Error setting localStorage: ', err);
	}
}

export function removeLocalStorage(key: string): void {
	try {
		localStorage.removeItem(key);
	} catch (err) {
		console.error('Error removing localStorage: ', err);
	}
}

export function clearLocalStorage(): void {
	try {
		localStorage.clear();
	} catch (err) {
		console.error('Error clearing localStorage: ', err);
	}
}
