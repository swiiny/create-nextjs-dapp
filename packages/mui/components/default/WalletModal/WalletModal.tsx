import Portal from '@components/common/Portal';
import useWeb3 from '@hooks/useWeb3';
import { FC, MouseEvent, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GradientContainer from '../GradientContainer';
import { StyledModalBackground, StyledModalButton } from './WalletModal.styles';
import { IWalletModal } from './WalletModal.type';

import { WALLETS_ARRAY } from '@contexts/Web3Context/Web3Context.variables';
import Image from 'next/future/image';
import { ESize } from 'theme/theme.enum';
import Text from '../Text';
import { EFontWeight, ETextAlign } from '../Text/Text.enum';

const WalletModal: FC<IWalletModal> = ({ isOpen = false, onClose = () => {} }) => {
	const { connectWallet, isConnectingWallet, disconnectWallet, isWalletConnected, walletName } = useWeb3();

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const uuid = useMemo(() => {
		return uuidv4();
	}, []);

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
				onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => closeModal(e)}
			>
				<GradientContainer width={'500px'} height={'auto'} paddingY={{ xs: 2, md: 3 }} paddingX={{ xs: 2, md: 3 }}>
					{isWalletConnected && !isConnectingWallet ? (
						<StyledModalButton onClick={() => handleDisconnectWallet()}>
							<Text size={ESize.l} weight={EFontWeight.bold} align={ETextAlign.center}>
								Disconnect {walletName}
							</Text>
						</StyledModalButton>
					) : (
						WALLETS_ARRAY.map((wallet) => (
							<StyledModalButton key={wallet.name} onClick={() => connectWallet(wallet)}>
								<Image src={wallet.srcLogo} alt={`${wallet.name}'s logo`} width={60} height={60} />
								<Text size={ESize.l} weight={EFontWeight.bold}>
									{wallet.name}
								</Text>
							</StyledModalButton>
						))
					)}
				</GradientContainer>
			</StyledModalBackground>
		</Portal>
	);
};

export { WalletModal };
