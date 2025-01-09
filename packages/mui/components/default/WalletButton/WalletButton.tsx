import { WALLETS } from '@contexts/Web3Context/Web3Context.variables';
import useWeb3 from '@hooks/useWeb3';
import Address from '@models/Address';
import { FC } from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { useTheme } from 'styled-components';
import Button from '../Button';
import WalletModal from '../WalletModal';
import { IWalletButton } from './WalletButton.type';

const WalletButton: FC<IWalletButton> = () => {
	const { connectWallet, accounts, setIsWalletModalOpen, isWalletModalOpen } = useWeb3();
	const theme = useTheme();

	const address = accounts[0]?.address;
	const ens = accounts[0]?.ens;

	const isWalletConnected = !!address;

	return (
		<>
			<WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
			<Button
				data-testid='connect-wallet-button'
				onClick={!!address ? () => setIsWalletModalOpen(true) : () => connectWallet(WALLETS.blocknative)}
				color={isWalletConnected ? theme.colors.lightBlue : theme.colors.white}
				icon={<MdOutlineAccountBalanceWallet size={28} />}
			>
				{isWalletConnected ? ens?.name || Address.from(address)?.truncate() : 'Connect Wallet'}
			</Button>
		</>
	);
};

export { WalletButton };
