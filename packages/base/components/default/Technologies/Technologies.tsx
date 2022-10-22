import React, { FC } from 'react';
import { ITechnologies } from './Technologies.type';
import Image from 'next/future/image';
import useResponsive from '@hooks/useResponsive';
import styles from './Technologies.module.scss';

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

const Technologies: FC<ITechnologies> = () => {
	const { isBiggerThanMd } = useResponsive();

	const cssLogo = !isBiggerThanMd ? { width: 'auto', height: '30px' } : { width: 'auto', height: '45px' };

	return (
		<div className={styles.technologies}>
			{LOGOS.map((logo) => (
				<div className={styles.logoContainer} key={logo.label}>
					<Image src={logo.src} alt={logo.label} width={60} height={60} style={cssLogo} />

					<a
						className={styles.link}
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
