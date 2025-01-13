import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { FC } from 'react';
import { colors } from '../../../../styles/theme.stylex';
import { ITechnologies } from './Technologies.type';

const LOGOS = [
	{
		label: 'NextJs',
		url: 'https://nextjs.org/',
		src: '/assets/logo-next.svg'
	},
	{
		label: 'Typescript',
		url: 'https://www.typescriptlang.org/',
		src: '/assets/logo-typescript.svg'
	},
	{
		label: 'React',
		url: 'https://reactjs.org/',
		src: '/assets/logo-react.svg'
	},
	{
		label: 'Ethers',
		url: 'https://docs.ethers.io/v6/',
		src: '/assets/logo-ethers.svg'
	},
	{
		label: 'BlockNative',
		url: 'https://www.blocknative.com/wallets',
		src: '/assets/logo-blocknative.svg'
	}
];

const MD = '@media only screen and (min-width: 900px) and (max-width: 1199px)';
const LG = '@media only screen and (min-width: 1200px)';

const styles = stylex.create({
	technologies: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		gap: {
			default: '28px',
			[MD]: '40px',
			[LG]: '50px'
		}
	},
	logoContainer: {
		position: 'relative',
		borderRadius: '12px',
		['@media screen and (prefers-reduced-motion: no-preference)']: {
			transition: 'all 0.4s ease-in-out'
		},
		'::before': {
			content: "' '",
			position: 'absolute',
			top: '-15px',
			left: '-20px',
			right: '-20px',
			bottom: '-15px',
			zIndex: '-1',
			borderRadius: 'inherit',
			backgroundColor: colors.black,
			['@media screen and (prefers-reduced-motion: no-preference)']: {
				transition: 'all 0.3s ease-in-out'
			}
		},
		':hover': {
			opacity: '1 !important',
			transform: 'scale(1.05)'
		}
	},
	logoImg: {
		width: 'auto',
		height: {
			default: '30px',
			[MD]: '45px',
			[LG]: '45px'
		}
	},
	link: {
		position: 'absolute',
		inset: '0'
	}
});

const Technologies: FC<ITechnologies> = () => {
	return (
		<div {...stylex.props(styles.technologies)}>
			{LOGOS.map((logo) => (
				<div {...stylex.props(styles.logoContainer)} key={logo.label}>
					<Image src={logo.src} alt={logo.label} width={60} height={60} {...stylex.props(styles.logoImg)} />

					<a
						{...stylex.props(styles.link)}
						href={logo.url}
						aria-label={`link to ${logo.label}`}
						target='_blank'
						rel='noopener noreferrer'
					/>
				</div>
			))}
		</div>
	);
};

export { Technologies };
