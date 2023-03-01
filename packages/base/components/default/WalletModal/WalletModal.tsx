import Portal from '@components/common/Portal';
import useWeb3 from '@hooks/useWeb3';
import { FC, MouseEvent, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GradientContainer from '../GradientContainer';
import { IWalletModal } from './WalletModal.type';

import { WALLETS_ARRAY } from '@contexts/Web3Context/Web3Context.variables';
import classNames from 'classnames';
import Image from 'next/image';
import { ESize } from 'theme/theme.enum';
import Text from '../Text';
import { EFontWeight, ETextAlign } from '../Text/Text.enum';
import styles from './WalletModal.module.scss';

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
		if (e.target?.getAttribute('class')?.includes('modalBackground')) {
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
			<button
				className={classNames(styles.modalBackground, {
					[styles.isVisible]: isModalVisible && isOpen
				})}
				onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => closeModal(e)}
			>
				<GradientContainer className={styles.gradientContainer}>
					{isWalletConnected && !isConnectingWallet ? (
						<button className={styles.modalButton} onClick={() => handleDisconnectWallet()}>
							<Text size={ESize.l} weight={EFontWeight.bold} align={ETextAlign.center}>
								Disconnect {walletName}
							</Text>
						</button>
					) : (
						WALLETS_ARRAY.map((wallet) => (
							<button key={wallet.name} className={styles.modalButton} onClick={() => connectWallet(wallet)}>
								<Image src={wallet.srcLogo} alt={`${wallet.name}'s logo`} width={60} height={60} />
								<Text size={ESize.l} weight={EFontWeight.bold}>
									{wallet.name}
								</Text>
							</button>
						))
					)}
				</GradientContainer>
			</button>
		</Portal>
	);
};

export { WalletModal };
