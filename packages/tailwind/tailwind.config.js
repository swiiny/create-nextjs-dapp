/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: false,
	purge: {
		content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
		options: {
			safelist: [
				// Font family
				'font-nunito',

				// Screens
				'sm',
				'md',
				'lg',
				'xl',

				// Spacing
				...[
					'unset',
					'6xs',
					'5xs',
					'4xs',
					'3xs',
					'2xs',
					'xs',
					's',
					'm',
					'l',
					'xl',
					'2xl',
					'3xl',
					'4xl',
					'5xl',
					'6xl',
					'7xl',
					'8xl'
				].flatMap((size) => [
					`p-${size}`,
					`py-${size}`,
					`px-${size}`,
					`pt-${size}`,
					`pb-${size}`,
					`pl-${size}`,
					`pr-${size}`,
					`m-${size}`,
					`my-${size}`,
					`mx-${size}`,
					`mt-${size}`,
					`mb-${size}`,
					`ml-${size}`,
					`mr-${size}`
				]),

				// Box shadow
				'shadow-custom',

				// Colors
				...[
					'white',
					'black',
					'gray-dark',
					'gray',
					'blue',
					'blue-light',
					'success',
					'yellow',
					'blue-gradient-from',
					'blue-gradient-to',
					'gray-gradient-from',
					'gray-gradient-to'
				].flatMap((color) => [
					`bg-theme-${color}`,
					`text-theme-${color}`,
					`from-theme-${color}`,
					`to-theme-${color}`,
					`border-theme-${color}`
				])
			]
		}
	},
	content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			nunito: ['Nunito', 'sans-serif']
		},
		extend: {
			screens: {
				sm: '600px',
				md: '900px',
				lg: '1200px',
				xl: '1536px'
			},
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
			},
			boxShadow: {
				custom: '0px 5px 20px 10px rgba(30, 31, 31, 0.31)'
			},
			colors: {
				theme: {
					white: '#ffffff',
					black: '#121314',
					yellow: '#e3b341',
					gray: {
						DEFAULT: '#979797',
						dark: '#1E1F20',
						gradient: {
							from: '#232424',
							to: '#171717'
						}
					},
					blue: {
						DEFAULT: '#2467DF',
						light: '#00B1EA',
						gradient: {
							from: '#2467DF',
							to: '#00B1EA'
						}
					},
					success: '#24DF9C'
				}
			}
		}
	},
	plugins: []
};
