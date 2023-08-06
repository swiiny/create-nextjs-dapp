import Portal from '@components/common/Portal';
import useWeb3 from '@hooks/useWeb3';
import classNames from 'classnames';
import { FC, MouseEvent, useEffect, useId, useState } from 'react';
import { ESize } from 'theme/theme.enum';
import GradientContainer from '../GradientContainer';
import Text from '../Text';
import { EFontWeight, ETextAlign } from '../Text/Text.enum';
import styles from './WalletModal.module.scss';
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
				onClick={(e) => closeModal(e)}
			>
				<GradientContainer className={styles.gradientContainer}>
					<button className={styles.modalButton} onClick={() => handleDisconnectWallet()}>
						<Text size={ESize.l} weight={EFontWeight.bold} align={ETextAlign.center}>
							Disconnect Wallet
						</Text>
					</button>
				</GradientContainer>
			</button>
		</Portal>
	);
};

export { WalletModal };
