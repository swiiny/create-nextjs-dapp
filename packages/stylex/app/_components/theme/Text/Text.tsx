import * as stylex from '@stylexjs/stylex';
import { FC, PropsWithChildren } from 'react';
import { EColor, ESize } from '../../../../styles/theme.enum';
import { colors } from '../../../../styles/theme.stylex';
import { EFontWeight, ETextAlign, ETextType } from './Text.enum';
import { IText } from './Text.type';
import { textTypeStylexKeyMap } from './Text.variables';

const MD = '@media only screen and (min-width: 900px) and (max-width: 1199px)';
const LG = '@media only screen and (min-width: 1200px) and (max-width: 1535px)';
const XL = '@media only screen and (min-width: 1536px)';

const styles = stylex.create({
	text: {
		position: 'relative'
	},
	regular: {
		fontWeight: '400'
	},
	bold: {
		fontWeight: '700'
	},
	alignLeft: {
		textAlign: 'left'
	},
	alignCenter: {
		textAlign: 'center'
	},
	alignRight: {
		textAlign: 'right'
	},
	headingOneSmall: {
		fontSize: {
			default: 'calc(0.75 * 3rem * 0.6)',
			[MD]: 'calc(0.75 * 3rem * 0.8)',
			[LG]: 'calc(0.75 * 3rem * 0.9)',
			[XL]: 'calc(0.75 * 3rem * 1)'
		}
	},
	headingOneMedium: {
		fontSize: {
			default: 'calc(3rem * 0.6)',
			[MD]: 'calc(3rem * 0.8)',
			[LG]: 'calc(3rem * 0.9)',
			[XL]: 'calc(3rem * 1)'
		}
	},
	headingOneLarge: {
		fontSize: {
			default: 'calc(1.25 * 3rem * 0.6)',
			[MD]: 'calc(1.25 * 3rem * 0.8)',
			[LG]: 'calc(1.25 * 3rem * 0.9)',
			[XL]: 'calc(1.25 * 3rem * 1)'
		}
	},
	headingTwoSmall: {
		fontSize: {
			default: 'calc(0.75 * 2.5rem * 0.6)',
			[MD]: 'calc(0.75 * 2.5rem * 0.8)',
			[LG]: 'calc(0.75 * 2.5rem * 0.9)',
			[XL]: 'calc(0.75 * 2.5rem * 1)'
		}
	},
	headingTwoMedium: {
		fontSize: {
			default: 'calc(2.5rem * 0.6)',
			[MD]: 'calc(2.5rem * 0.8)',
			[LG]: 'calc(2.5rem * 0.9)',
			[XL]: 'calc(2.5rem * 1)'
		}
	},
	headingTwoLarge: {
		fontSize: {
			default: 'calc(1.25 * 2.5rem * 0.6)',
			[MD]: 'calc(1.25 * 2.5rem * 0.8)',
			[LG]: 'calc(1.25 * 2.5rem * 0.9)',
			[XL]: 'calc(1.25 * 2.5rem * 1)'
		}
	},
	headingThreeSmall: {
		fontSize: {
			default: 'calc(0.75 * 2rem * 0.6)',
			[MD]: 'calc(0.75 * 2rem * 0.8)',
			[LG]: 'calc(0.75 * 2rem * 0.9)',
			[XL]: 'calc(0.75 * 2rem * 1)'
		}
	},
	headingThreeMedium: {
		fontSize: {
			default: 'calc(2rem * 0.6)',
			[MD]: 'calc(2rem * 0.8)',
			[LG]: 'calc(2rem * 0.9)',
			[XL]: 'calc(2rem * 1)'
		}
	},
	headingThreeLarge: {
		fontSize: {
			default: 'calc(1.25 * 2rem * 0.6)',
			[MD]: 'calc(1.25 * 2rem * 0.8)',
			[LG]: 'calc(1.25 * 2rem * 0.9)',
			[XL]: 'calc(1.25 * 2rem * 1)'
		}
	},
	headingFourSmall: {
		fontSize: {
			default: 'calc(0.75 * 1.5rem * 0.6)',
			[MD]: 'calc(0.75 * 1.5rem * 0.8)',
			[LG]: 'calc(0.75 * 1.5rem * 0.9)',
			[XL]: 'calc(0.75 * 1.5rem * 1)'
		}
	},
	headingFourMedium: {
		fontSize: {
			default: 'calc(1.5rem * 0.6)',
			[MD]: 'calc(1.5rem * 0.8)',
			[LG]: 'calc(1.5rem * 0.9)',
			[XL]: 'calc(1.5rem * 1)'
		}
	},
	headingFourLarge: {
		fontSize: {
			default: 'calc(1.25 * 1.5rem * 0.6)',
			[MD]: 'calc(1.25 * 1.5rem * 0.8)',
			[LG]: 'calc(1.25 * 1.5rem * 0.9)',
			[XL]: 'calc(1.25 * 1.5rem * 1)'
		}
	},
	headingFiveSmall: {
		fontSize: {
			default: 'calc(0.75 * 1.25rem * 0.6)',
			[MD]: 'calc(0.75 * 1.25rem * 0.8)',
			[LG]: 'calc(0.75 * 1.25rem * 0.9)',
			[XL]: 'calc(0.75 * 1.25rem * 1)'
		}
	},
	headingFiveMedium: {
		fontSize: {
			default: 'calc(1.25rem * 0.6)',
			[MD]: 'calc(1.25rem * 0.8)',
			[LG]: 'calc(1.25rem * 0.9)',
			[XL]: 'calc(1.25rem * 1)'
		}
	},
	headingFiveLarge: {
		fontSize: {
			default: 'calc(1.25 * 1.25rem * 0.6)',
			[MD]: 'calc(1.25 * 1.25rem * 0.8)',
			[LG]: 'calc(1.25 * 1.25rem * 0.9)',
			[XL]: 'calc(1.25 * 1.25rem * 1)'
		}
	},
	headingSixSmall: {
		fontSize: {
			default: 'calc(0.75 * 1rem * 0.6)',
			[MD]: 'calc(0.75 * 1rem * 0.8)',
			[LG]: 'calc(0.75 * 1rem * 0.9)',
			[XL]: 'calc(0.75 * 1rem * 1)'
		}
	},
	headingSixMedium: {
		fontSize: {
			default: 'calc(1rem * 0.6)',
			[MD]: 'calc(1rem * 0.8)',
			[LG]: 'calc(1rem * 0.9)',
			[XL]: 'calc(1rem * 1)'
		}
	},
	headingSixLarge: {
		fontSize: {
			default: 'calc(1.25 * 1rem * 0.6)',
			[MD]: 'calc(1.25 * 1rem * 0.8)',
			[LG]: 'calc(1.25 * 1rem * 0.9)',
			[XL]: 'calc(1.25 * 1rem * 1)'
		}
	},
	pSmall: {
		fontSize: {
			default: 'calc(0.75 * 1rem * 0.6)',
			[MD]: 'calc(0.75 * 1rem * 0.8)',
			[LG]: 'calc(0.75 * 1rem * 0.9)',
			[XL]: 'calc(0.75 * 1rem * 1)'
		}
	},
	pMedium: {
		fontSize: {
			default: 'calc(1rem * 0.6)',
			[MD]: 'calc(1rem * 0.8)',
			[LG]: 'calc(1rem * 0.9)',
			[XL]: 'calc(1rem * 1)'
		}
	},
	pLarge: {
		fontSize: {
			default: 'calc(1.25 * 1rem * 0.6)',
			[MD]: 'calc(1.25 * 1rem * 0.8)',
			[LG]: 'calc(1.25 * 1rem * 0.9)',
			[XL]: 'calc(1.25 * 1rem * 1)'
		}
	},
	inherit: { fontSize: 'inherit', fontWeight: 'inherit', textAlign: 'inherit', color: 'inherit' },
	getGradient: (color: EColor): Record<string, string> => ({
		background: colors[color],
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	}),
	getColor: (color: EColor): Record<string, string> => ({
		color: colors[color]
	})
});

const Text: FC<PropsWithChildren<IText>> = ({
	children,
	type = ETextType.p,
	component,
	size = ESize.m,
	weight,
	align,
	color = EColor.white,
	style,
	...otherProps
}) => {
	const TextTag = component || type;

	// heading key
	const key = textTypeStylexKeyMap(size)[type as keyof typeof ETextType] as keyof Omit<
		typeof styles,
		'getColor' | 'text' | 'getGradient' | 'inherit'
	>;

	return (
		<TextTag
			{...stylex.props(
				styles[key],
				styles.text,
				weight === EFontWeight.regular && styles.regular,
				weight === EFontWeight.bold && styles.bold,
				align === ETextAlign.left && styles.alignLeft,
				align === ETextAlign.center && styles.alignCenter,
				align === ETextAlign.right && styles.alignRight,
				!!color
					? color === EColor.blueGradient || color === EColor.darkGradient
						? styles.getGradient(color)
						: styles.getColor(color)
					: null,
				type === ETextType.span && styles.inherit,
				style
			)}
			{...otherProps}
		>
			{children}
		</TextTag>
	);
};

export { Text };
