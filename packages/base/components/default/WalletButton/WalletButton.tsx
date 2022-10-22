import { FC } from 'react';
import { IWalletButton } from './WalletButton.type';
import { useWeb3 } from '@contexts/Web3Context/Web3Context';
import { EColor } from '@theme/theme.enum';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import Button from '../Button';
import WalletModal from '../WalletModal';

const WalletButton: FC<IWalletButton> = () => {
	const { isWalletModalOpen, setIsWalletModalOpen, address, isWalletConnected, ens } = useWeb3();

	return (
		<>
			<WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
			<Button
				onClick={() => setIsWalletModalOpen(true)}
				color={isWalletConnected ? EColor.lightBlue : EColor.white}
				iconColor={isWalletConnected ? EColor.lightBlue : EColor.white}
				icon={<MdOutlineAccountBalanceWallet size={28} />}
			>
				{isWalletConnected ? ens || address?.truncate() : 'Connect Wallet'}
			</Button>
		</>
	);
};

export { WalletButton };
