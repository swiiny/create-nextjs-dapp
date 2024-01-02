// can't be used with stylex as it's imported
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
