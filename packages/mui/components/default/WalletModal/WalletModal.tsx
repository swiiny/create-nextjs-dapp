import Portal from '@components/common/Portal';
import useWeb3 from '@hooks/useWeb3';
import { FC, MouseEvent, useEffect, useId, useState } from 'react';
import { ESize } from 'theme/theme.enum';
import GradientContainer from '../GradientContainer';
import Text from '../Text';
import { EFontWeight, ETextAlign } from '../Text/Text.enum';
import { StyledModalBackground, StyledModalButton } from './WalletModal.styles';
import { IWalletModal } from './WalletModal.type';

const WalletModal: FC<IWalletModal> = ({ isOpen = false, onClose = () => {} }) => {
	const { disconnectWallet } = useWeb3();

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const uuid = useId();

	useEffect(() => {
		if (!uuid) {
			return;
		}
		if (isOpen) {
			// @ts-ignore
			clearTimeout(window[`modal-timeout-${uuid}`]);
			setTimeout(() => {
				document.body.style.overflow = 'hidden';
				setIsModalVisible(true);
			}, 10);
		} else {
			// @ts-ignore
			window[`modal-timeout-${uuid}`] = setTimeout(() => {
				document.body.style.overflow = 'visible';
				document.body.style.overflowX = 'hidden';

				setIsModalVisible(false);
			}, 400);
		}
	}, [isOpen, uuid]);

	const closeModal = (e: MouseEvent) => {
		// @ts-ignore
		if (e.target?.getAttribute('class')?.includes('modal-background')) {
			onClose();
		}
	};

	const handleDisconnectWallet = () => {
		onClose();

		setTimeout(() => {
			disconnectWallet();
		}, 300);
	};

	if (!isOpen && !isModalVisible) {
		return <></>;
	}

	return (
		<Portal selector='body'>
			<StyledModalBackground
				className='modal-background'
				isVisible={isModalVisible && isOpen}
				onClick={(e) => closeModal(e)}
			>
				<GradientContainer width={'500px'} height={'auto'} paddingY={{ xs: 2, md: 3 }} paddingX={{ xs: 2, md: 3 }}>
					<StyledModalButton onClick={() => handleDisconnectWallet()}>
						<Text size={ESize.l} weight={EFontWeight.bold} align={ETextAlign.center}>
							Disconnect Wallet
						</Text>
					</StyledModalButton>
				</GradientContainer>
			</StyledModalBackground>
		</Portal>
	);
};

export { WalletModal };
