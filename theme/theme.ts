// theme.ts
import { DefaultTheme } from 'styled-components';

export const defaultTheme = {
	spacing: {
		unset: 'unset',
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
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set dark theme colors
		white: '#ffffff'
	}
};

export const lightTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set light theme colors
		white: '#000000'
	}
};
