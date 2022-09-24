import React, { FC, useState } from 'react';
import { IButton } from './Button.type';
import { StyledButton, StyledIconsContainer } from './Button.styles';
import GradientContainer from '../GradientContainer';
import { MdOutlineContentCopy, MdOutlineCheck } from 'react-icons/md';
import { copy } from '@utils/functions';

const Button: FC<IButton> = ({ children, onClick, valueToCopy, color, icon, iconColor, gradientContainerProps }) => {
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

	return (
		<StyledButton onClick={() => handleClick()} color={color} iconColor={iconColor}>
			<GradientContainer
				paddingY='12px'
				paddingX='36px'
				display='flex'
				sx={{ justifyContent: 'center', alignItems: 'center' }}
				{...gradientContainerProps}
			>
				{children}

				{valueToCopy ? (
					<>
						<StyledIconsContainer isActive={isCopying}>
							<MdOutlineContentCopy size={24} />
							<MdOutlineCheck size={24} />
						</StyledIconsContainer>
					</>
				) : icon ? (
					icon
				) : (
					<></>
				)}
			</GradientContainer>
		</StyledButton>
	);
};

export { Button };
