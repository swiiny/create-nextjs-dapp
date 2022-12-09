import { FC } from 'react';
import { IWalletButton } from './WalletButton.type';

import useWeb3 from '@hooks/useWeb3';

import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { useTheme } from 'styled-components';
import Button from '../Button';
import WalletModal from '../WalletModal';

const WalletButton: FC<IWalletButton> = () => {
	const { isWalletModalOpen, setIsWalletModalOpen, address, isWalletConnected, ens } = useWeb3();
	const theme = useTheme();

	return (
		<>
			<WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
			<Button
				onClick={() => setIsWalletModalOpen(true)}
				color={isWalletConnected ? theme.colors.lightBlue : theme.colors.white}
				icon={<MdOutlineAccountBalanceWallet size={28} />}
			>
				{isWalletConnected ? ens || address?.truncate() : 'Connect Wallet'}
			</Button>
		</>
	);
};

export { WalletButton };
