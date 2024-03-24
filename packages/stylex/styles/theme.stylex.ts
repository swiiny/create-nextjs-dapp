import * as stylex from '@stylexjs/stylex';

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
	transparentGray: {
		default: '#97979730'
	},
	lessTransparentGray: {
		default: '#97979740'
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

export const texts = stylex.defineVars({
	fontFamily: 'Nunito, sans-serif',
	normal: '400',
	bold: 'bold'
});

/* export const globalStyles = stylex.create({
	gradientContainer: {
		position: 'relative',
		borderRadius: '13px',
		background: colors.darkGradient,
		border: `1px solid ${colors.darkGray}`,
		boxShadow: `0px 5px 20px 10px ${colors.black + '50'}`
	}
}); */
