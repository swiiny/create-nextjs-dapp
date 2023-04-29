enum ESize {
	unset = 'unset',
	'6xs' = '6xs',
	'5xs' = '5xs',
	'4xs' = '4xs',
	'3xs' = '3xs',
	'2xs' = '2xs',
	xs = 'xs',
	s = 'small',
	m = 'medium',
	l = 'large',
	xl = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
	'8xl' = '8xl'
}

enum EMediaQuery {
	xs = '0px',
	sm = '600px',
	md = '900px',
	lg = '1200px',
	xl = '1536px'
}

enum EHtmlTag {
	span = 'span',
	div = 'div',
	p = 'p',
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6'
}

enum EColor {
	white = 'theme-white',
	black = 'theme-black',
	darkGray = 'theme-gray-dark',
	gray = 'theme-gray',
	blue = 'theme-blue',
	lightBlue = 'theme-blue-light',
	success = 'theme-success',
	yellow = 'theme-yellow',
	blueGradientFrom = 'theme-blue-gradient-from',
	blueGradientTo = 'theme-blue-gradient-to',
	darkGradientFrom = 'theme-gray-gradient-from',
	darkGradientTo = 'theme-gray-gradient-to'
}

const colors = Object.values(EColor);

export { ESize, EMediaQuery, EColor, EHtmlTag, colors };
