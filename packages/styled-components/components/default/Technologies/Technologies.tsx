import { EFlex } from '@components/layout/Flex/Flex.enum';
import Image from 'next/image';
import { FC } from 'react';
import { StyledLink, StyledLogoContainer, StyledTechnologies } from './Technologies.styles';
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

const Technologies: FC<ITechnologies> = () => {
	return (
		<StyledTechnologies horizontal={EFlex.center} vertical={EFlex.center} wrapItems gap={28} mdGap={40} lgGap={50}>
			{LOGOS.map((logo) => (
				<StyledLogoContainer key={logo.label}>
					<Image src={logo.src} alt={logo.label} width={60} height={60} />

					<StyledLink href={logo.url} aria-label={`link to ${logo.label}`} target='_blank' rel='noopener noreferrer' />
				</StyledLogoContainer>
			))}
		</StyledTechnologies>
	);
};

export { Technologies };
