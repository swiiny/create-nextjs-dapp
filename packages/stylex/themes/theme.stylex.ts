import { stylex } from '@stylexjs/stylex';

export const MEDIA = {
	dark: '@media (prefers-color-scheme: dark)',
	light: '@media (prefers-color-scheme: light)',
	noPrefer: '@media (prefers-color-scheme: no-preference)',
	reducedMotion: '@media (prefers-reduced-motion: reduce)',
	hover: '@media (hover: hover)',
	noHover: '@media (hover: none)',
	screen: {
		min: {
			xs: '@media only screen and (min-width: 0px)',
			sm: '@media only screen and (min-width: 600px)',
			md: '@media only screen and (min-width: 900px)',
			lg: '@media only screen and (min-width: 1200)',
			xl: '@media only screen and (min-width: 1536px)'
		},
		max: {
			xs: '@media only screen and (max-width: 599px)',
			sm: '@media only screen and (max-width: 899px)',
			md: '@media only screen and (max-width: 1199px)',
			lg: '@media only screen and (max-width: 1535px)',
			xl: '@media only screen and (max-width: 1919px)'
		}
	}
};

export const colors = stylex.defineVars({
	white: {
		default: '#ffffff'
	},
	black: {
		default: '#121314'
	},
	darkGray: {
		default: '#1e1f20'
	},
	gray: {
		default: '#979797'
	},
	blue: {
		default: '#2467df'
	},
	lightBlue: {
		default: '#00b1ea'
	},
	success: {
		default: '#24df9c'
	},
	yellow: {
		default: '#e3b341'
	},
	blueGradient: {
		default: 'linear-gradient(90deg, #2467df 0%, #00b1ea 100%)'
	},
	darkGradient: {
		default: 'linear-gradient(180deg, #232424 0%, #171717 100%)'
	}
});

export const spacing = stylex.defineVars({
	'6xs': '2px',
	'5xs': '4px',
	'4xs': '8px',
	'3xs': '12px',
	'2xs': '16px',
	xs: '20px',
	s: '24px',
	m: '32px',
	l: '40px',
	xl: '48px',
	'2xl': '64px',
	'3xl': '80px',
	'4xl': '100px',
	'5xl': '120px',
	'6xl': '140px',
	'7xl': '160px',
	'8xl': '180px'
});
