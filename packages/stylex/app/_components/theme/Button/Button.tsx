'use client';

import * as stylex from '@stylexjs/stylex';
import { copy } from '@utils/global';
import { FC, useMemo, useState } from 'react';
import { MdOutlineCheck, MdOutlineContentCopy } from 'react-icons/md';
import { colors } from '../../../../styles/theme.stylex';
import { IButton } from './Button.type';

const SM = '@media (min-width: 600px) and (max-width: 899px)';
const MD = '@media (min-width: 900px) and (max-width: 1199px)';
const LG = '@media (min-width: 1200px) and (max-width: 1535px)';
const XL = '@media (min-width: 1536px) and (max-width: 1919px)';

const styles = stylex.create({
	shared: {
		position: 'relative',
		backgroundColor: 'none',
		cursor: 'pointer',
		//padding: 0,
		fontSize: {
			default: '0.9rem',
			[SM]: '1rem',
			[MD]: '1.2rem',
			[LG]: '1.35rem',
			[XL]: '1.5rem'
		},
		transition: {
			'@media screen and (prefers-reduced-motion: no-preference)': 'all 0.3s ease-in-out'
		},
		color: {
			default: colors.white,
			':hover': colors.gray
		}
	},
	copyingColor: {
		color: colors.success
	},
	iconContainer: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '20px',
		color: 'inherit'
	},
	icons: {
		position: 'absolute',
		marginLeft: '16px',
		transition: {
			'@media screen and (prefers-reduced-motion: no-preference)': 'all 0.3s ease-in-out'
		}
	},
	firstIcon: {
		opacity: 1,
		transform: 'translateX(0) rotateX(0)',
		color: 'inherit'
	},
	firstIconActive: {
		opacity: 0,
		transform: 'translateX(-50%) rotateX(90deg)'
	},
	secondIcon: {
		opacity: 0,
		transform: 'translateX(50%) rotateX(-90deg)'
	},
	secondIconActive: {
		opacity: 1,
		transform: 'translateX(0) rotateX(0)'
	},
	gradientContainer: {
		minHeight: '42px',
		position: 'relative',
		borderRadius: '13px',
		background: colors.darkGradient,
		border: '1px solid ' + colors.darkGray,
		//borderColor: colors.darkGray,
		boxShadow: '0px 5px 20px 10px #1E1F2050',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: {
			default: '6px 18px',
			[SM]: '9px 27px',
			'@media screen and (min-width: 960px)': '12px 36px'
		},
		transform: {
			default: 'scale(1.0)',
			':hover': 'scale(1.02)'
		}
	},
	containerGap: {
		gap: '16px'
	}
});

const Button: FC<IButton> = ({ children, onClick, href, valueToCopy, icon, style, ...otherProps }) => {
	const [isCopying, setIsCopying] = useState(false);

	const handleClick = () => {
		if (valueToCopy) {
			copy(valueToCopy);

			setIsCopying(true);

			setTimeout(() => {
				setIsCopying(false);
			}, 1500);

			return;
		}

		if (onClick) {
			onClick();
		}
	};

	const content = useMemo(() => {
		return (
			<>
				{children}

				{valueToCopy ? (
					<>
						<div {...stylex.props(styles.iconContainer)}>
							<MdOutlineContentCopy
								size={24}
								{...stylex.props(styles.icons, isCopying ? styles.firstIconActive : styles.firstIcon)}
							/>
							<MdOutlineCheck
								size={24}
								{...stylex.props(styles.icons, isCopying ? styles.secondIconActive : styles.secondIcon)}
							/>
						</div>
					</>
				) : icon ? (
					icon
				) : null}
			</>
		);
	}, [children, icon, isCopying, valueToCopy]);

	if (href) {
		return (
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				{...stylex.props(
					styles.gradientContainer,
					styles.shared,
					!!icon && styles.containerGap,
					style,
					isCopying && styles.copyingColor
				)}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			onClick={handleClick}
			{...stylex.props(
				styles.gradientContainer,
				styles.shared,
				!!icon && styles.containerGap,
				style,
				isCopying && styles.copyingColor
			)}
			{...otherProps}
		>
			{content}
		</button>
	);
};

export { Button };
