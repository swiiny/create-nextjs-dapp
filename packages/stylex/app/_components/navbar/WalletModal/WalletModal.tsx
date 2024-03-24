'use client';

import Portal from '@components/Portal';
import Text from '@components/theme/Text';
import { EFontWeight, ETextAlign } from '@components/theme/Text/Text.enum';
import useWeb3 from '@hooks/useWeb3';
import * as stylex from '@stylexjs/stylex';
import { FC, useEffect, useState } from 'react';
import { ESize } from 'styles/theme.enum';
import { colors, spacing } from '../../../../styles/theme.stylex';
import { IWalletModal } from './WalletModal.type';

const styles = stylex.create({
	bgButton: {
		position: 'fixed',
		inset: 0,
		zIndex: 900,
		backgroundColor: colors.black,
		opacity: 0.0,
		transition: 'opacity 0.3s ease-in-out',
		border: 'none'
	},
	bgButtonVisible: {
		opacity: 0.5
	},
	modalContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		zIndex: 901,
		transition: 'opacity 0.3s ease-in-out',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 500,
		height: 'auto',
		opacity: 0,
		padding: {
			default: spacing['2xs'],
			'@media (min-width: 900px)': spacing.s
		},
		borderRadius: '13px',
		background: colors.darkGradient,
		border: '1px solid',
		borderColor: colors.darkGray,
		boxShadow: '0px 5px 20px 10px #12131450'
	},
	modalContainerVisible: {
		opacity: 1
	},
	button: {
		border: 'none',
		height: 80,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: {
			default: colors.transparentGray,
			':hover': colors.lessTransparentGray
		},
		padding: '0 20px',
		cursor: 'pointer',
		transition: 'all 0.3s ease-in-out'
	}
});

const WalletModal: FC<IWalletModal> = ({ isOpen = false, onClose = () => {} }) => {
	const { disconnectWallet } = useWeb3();

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	useEffect(() => {
		if (isOpen) {
			const timeout = setTimeout(() => {
				document.body.style.overflow = 'hidden';
				setIsModalVisible(true);
			}, 10);

			return () => clearTimeout(timeout);
		} else {
			const timeout = setTimeout(() => {
				document.body.style.overflow = 'visible';
				document.body.style.overflowX = 'hidden';

				setIsModalVisible(false);
			}, 400);

			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

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
				{...stylex.props(styles.bgButton, isModalVisible && isOpen ? styles.bgButtonVisible : {})}
				onClick={onClose}
			/>

			<div {...stylex.props(styles.modalContainer, isModalVisible && isOpen ? styles.modalContainerVisible : {})}>
				<button onClick={() => handleDisconnectWallet()} {...stylex.props(styles.button)}>
					<Text size={ESize.l} weight={EFontWeight.bold} align={ETextAlign.center}>
						Disconnect Wallet
					</Text>
				</button>
			</div>
		</Portal>
	);
};

export { WalletModal };
