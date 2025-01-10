import { EColor } from '@theme/theme.enum';
import Image from 'next/image';
import { FC } from 'react';
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
		<div className='flex flex-wrap justify-center items-center gap-7 md:gap-10 lg:gap-[50px] h-[49px]'>
			{LOGOS.map((logo) => (
				<div
					className={`relative rounded-[12px] transition-all relative before:absolute before:-top-4 before:-left-5 before:-right-5 before:-bottom-4 before:z-[-1] before:rounded before:transition before:bg-${EColor.black} hover:opacity-100 hover:transform hover:scale-[1.05] h-[49px]`}
					key={logo.label}
				>
					<Image src={logo.src} alt={logo.label} width={60} height={60} className='w-auto h-[30px] md:h-[45px]' />

					<a
						className='absolute top-0 left-0 right-0 bottom-0 cursor-pointer h-full'
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
