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
