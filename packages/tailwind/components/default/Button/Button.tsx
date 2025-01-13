import { EColor, EHtmlTag } from '@theme/theme.enum';
import { FC, useMemo, useState } from 'react';
import { MdOutlineCheck, MdOutlineContentCopy } from 'react-icons/md';
import { copy } from 'utils/global';
import GradientContainer from '../GradientContainer';
import { IButton } from './Button.type';

const Button: FC<IButton> = ({
	children,
	onClick,
	href,
	noPaddingResponsive = false,
	valueToCopy,
	color = EColor.white,
	icon,
	gradientContainerProps,
	customClasses = '',
	...otherProps
}) => {
	const [isCopying, setIsCopying] = useState(false);

	const contentColor = isCopying ? EColor.success : color;

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

	const textColor = isCopying
		? ` text-${EColor.success} hover:text-${EColor.success}`
		: ` text-${contentColor} hover:text-${EColor.gray}`;

	const content = useMemo(() => {
		return (
			<GradientContainer
				component={EHtmlTag.span}
				className={`flex items-center justify-center transition-all font-bold ${
					noPaddingResponsive
						? 'py-[12px] px-[36px]'
						: 'py-[6px] px-[18px] sm:py-[9px] sm:px-[27px] md:py-[12px] md:px-[36px]'
				} ${textColor ? `${textColor}` : ''}`}
				{...gradientContainerProps}
			>
				{children}

				{valueToCopy ? (
					<>
						<div className={`relative flex items-center justify-center ml-5 transition-all`}>
							<MdOutlineContentCopy
								size={24}
								className={
									`absolute transition-all ml-4` +
									`${
										isCopying
											? ` ${textColor} opacity-0 -translate-x-1/2 rotate-90`
											: ' opacity-100 translate-x-0 rotate-0'
									}`
								}
							/>
							<MdOutlineCheck
								size={24}
								className={
									`absolute transition-all ml-4` +
									`${
										isCopying
											? ` ${textColor} opacity-100 translate-x-0 rotate-0`
											: ' opacity-0 -translate-x-1/2 rotate-90'
									}`
								}
							/>
						</div>
					</>
				) : icon ? (
					icon
				) : (
					<></>
				)}
			</GradientContainer>
		);
	}, [children, gradientContainerProps, icon, isCopying, noPaddingResponsive, textColor, valueToCopy]);

	if (href) {
		return (
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				className={`relative button transition-all border-none bg-transparent cursor-pointer transition-all hover:transform-gpu hover:scale-[1.02] inline-block text-[0.9rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.35rem] xl:text-[1.5rem] ${customClasses} ${textColor}`}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			className={`relative border-none transition-all bg-transparent cursor-pointer transition-all hover:transform-gpu hover:scale-[1.02] text-[0.9rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.35rem] xl:text-[1.5rem] ${textColor} ${customClasses}`}
			onClick={() => handleClick()}
			{...otherProps}
		>
			{content}
		</button>
	);
};

export { Button };
