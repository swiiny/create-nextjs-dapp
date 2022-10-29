import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		spacing: {
			unset: string;
			'6xs': string;
			'5xs': string;
			'4xs': string;
			'3xs': string;
			'2xs': string;
			xs: string;
			s: string;
			m: string;
			l: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'5xl': string;
			'6xl': string;
			'7xl': string;
			'8xl': string;
		};
		colors: {
			white: string;
			black: string;
			darkGray: string;
			gray: string;
			blue: string;
			lightBlue: string;
			blueGradient: string;
			darkGradient: string;
			success: string;
		};
	}
}
