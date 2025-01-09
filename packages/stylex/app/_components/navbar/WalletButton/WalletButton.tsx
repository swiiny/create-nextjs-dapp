'use client';

import Button from '@components/theme/Button';
import { WALLETS } from '@contexts/Web3Context/Web3Context.variables';
import useWeb3 from '@hooks/useWeb3';
import Address from '@models/Address';
import * as stylex from '@stylexjs/stylex';
import { FC } from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { colors } from '../../../../styles/theme.stylex';
import WalletModal from '../WalletModal';
import { IWalletButton } from './WalletButton.type';

const styles = stylex.create({
	button: {
		color: colors.lightBlue
	}
});

const WalletButton: FC<IWalletButton> = () => {
	const { connectWallet, accounts, setIsWalletModalOpen, isWalletModalOpen } = useWeb3();

	const address = accounts[0]?.address;
	const ens = accounts[0]?.ens;

	const isWalletConnected = !!address;

	return (
		<>
			<WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
			<Button
				data-testid='connect-wallet-button'
				onClick={isWalletConnected ? () => setIsWalletModalOpen(true) : () => connectWallet(WALLETS.blocknative)}
				icon={<MdOutlineAccountBalanceWallet size={28} />}
				style={styles.button}
			>
				{isWalletConnected ? ens?.name || Address.from(address)?.truncate() : 'Connect Wallet'}
			</Button>
		</>
	);
};

export { WalletButton };
