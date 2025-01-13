import { Box } from '@mui/system';
import Image from 'next/image';
import { FC } from 'react';
import { StyledLink, StyledLogoContainer } from './Technologies.styles';
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

const boxStyles = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: { xs: '28px', md: '40px', lg: '50px' },
	'&:hover': {
		'& > div': {
			opacity: '0.5'
		}
	}
};

const Technologies: FC<ITechnologies> = () => {
	return (
		<Box sx={boxStyles}>
			{LOGOS.map((logo) => (
				<StyledLogoContainer key={logo.label}>
					<Image src={logo.src} alt={logo.label} width={60} height={60} />

					<StyledLink href={logo.url} aria-label={`link to ${logo.label}`} target='_blank' rel='noopener noreferrer' />
				</StyledLogoContainer>
			))}
		</Box>
	);
};

export { Technologies };
