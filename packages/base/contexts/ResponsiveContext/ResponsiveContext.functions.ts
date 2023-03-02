import { IFrames } from './ResponsiveContext.type';

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

/**
 * Create a function that will delay the execution of the passed
 * function for at least `wait` milliseconds.
 *
 * @param {Function} func The function to delay execution of.
 * @param {Number} wait The number of milliseconds to delay execution by.
 * @returns {Function} A new function that, when executed, will delay the
 * execution of `func` for at least `wait` milliseconds.
 */
function debounce(func: (...args: any[]) => void, wait: number): () => void {
	let timeout: ReturnType<typeof setTimeout>;
	return function executedFunction(...args: any[]) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

export { getResponsive, debounce };
