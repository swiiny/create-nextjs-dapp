import React, { FC } from 'react';
import { ITechnologies } from './Technologies.type';
import { Box } from '@mui/system';
import Image from 'next/future/image';
import { StyledLink, StyledLogoContainer } from './Technologies.styles';
import useResponsive from '@hooks/useResponsive';

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
		url: 'https://docs.ethers.io/v5/',
		src: '/assets/logo-ethers.svg'
	},
	{
		label: 'WalletConnect',
		url: 'https://walletconnect.org/',
		src: '/assets/logo-wallet-connect.svg'
	},
	{
		label: 'MetaMask',
		url: 'https://metamask.io/',
		src: '/assets/logo-metamask.svg'
	}
];

const cssContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: { xs: '30px', md: '40px', lg: '50px' },
	'&:hover': {
		'& > div': {
			opacity: '0.5'
		}
	}
};

const Technologies: FC<ITechnologies> = () => {
	return (
		<Box sx={cssContainer}>
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
