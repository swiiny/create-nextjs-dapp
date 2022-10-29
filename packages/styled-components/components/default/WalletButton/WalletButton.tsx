import React, { FC, useState } from 'react';
import { IWalletButton } from './WalletButton.type';

import { useWeb3 } from '@contexts/Web3Context/Web3Context';
import Button from '../Button';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import WalletModal from '../WalletModal';
import { useTheme } from 'styled-components';

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
