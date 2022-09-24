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
		white: '#ffffff',
		black: '#121314',
		darkGray: '#1E1F20',
		gray: '#979797',
		blue: '#2467DF',
		lightBlue: '#00B1EA',
		blueGradient: 'linear-gradient(90deg, #2467DF 0%, #00B1EA 100%)',
		darkGradient: 'linear-gradient(180deg, #232424 0%, #171717 100%)'
	}
};

export const lightTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set light theme colors
		white: '#ffffff',
		black: '#121314',
		darkGray: '#1E1F20',
		gray: '#979797',
		blue: '#2467DF',
		lightBlue: '#00B1EA',
		blueGradient: 'linear-gradient(90deg, #2467DF 43.62%, #00B1EA 53.09%), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
		darkGradient: 'linear-gradient(0deg, #1E1F20, #1E1F20), linear-gradient(180deg, #232424 0%, #171717 100%)'
	}
};
