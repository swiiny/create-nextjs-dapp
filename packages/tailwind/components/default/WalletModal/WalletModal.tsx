import Portal from '@components/common/Portal';
import { WALLETS_ARRAY } from '@contexts/Web3Context/Web3Context.variables';
import useWeb3 from '@hooks/useWeb3';
import Image from 'next/image';
import { FC, MouseEvent, useEffect, useId, useState } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import GradientContainer from '../GradientContainer';
import Text from '../Text';
import { EFontWeight, ETextAlign } from '../Text/Text.enum';
import { IWalletModal } from './WalletModal.type';

const WalletModal: FC<IWalletModal> = ({ isOpen = false, onClose = () => {} }) => {
	const { connectWallet, isConnectingWallet, disconnectWallet, isWalletConnected, walletName } = useWeb3();

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

	const isVisible = isModalVisible && isOpen;

	if (!isOpen && !isModalVisible) {
		return <></>;
	}

	return (
		<Portal selector='body'>
			<button
				className={`fixed modal-background top-0 left-0 right-0 bottom-0 z-900 border-none flex justify-center items-center transition-all opacity-0 ${
					isVisible ? `bg-${EColor.black} bg-opacity-80 opacity-100` : 'bg-transparent'
				}`}
				onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => closeModal(e)}
			>
				<GradientContainer
					className={`relative z-[901] transition-all w-[500px] max-w-[90%] h-auto p-4 md:p-6 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{isWalletConnected && !isConnectingWallet ? (
						<button
							className={`border-none transition-all bg-${EColor.gray} h-20 w-full flex justify-start items-center rounded-lg bg-opacity-30 p-0 pl-5 pr-5 cursor-pointer hover:bg-opacity-40 transition-all`}
							onClick={() => handleDisconnectWallet()}
						>
							<Text size={ESize.l} weight={EFontWeight.bold} align={ETextAlign.center}>
								Disconnect {walletName}
							</Text>
						</button>
					) : (
						WALLETS_ARRAY.map((wallet, index) => (
							<button
								key={wallet.name}
								className={`border-none transition-all bg-${
									EColor.gray
								} h-20 w-full flex justify-start items-center rounded-lg bg-opacity-30 p-0 pl-5 pr-5 cursor-pointer hover:bg-opacity-40 transition-all${
									index > 0 ? ' mt-4' : ''
								}`}
								onClick={() => connectWallet(wallet)}
							>
								<Image src={wallet.srcLogo} alt={`${wallet.name}'s logo`} width={60} height={60} className='mr-3' />
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
