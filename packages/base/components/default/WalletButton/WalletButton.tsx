import useWeb3 from '@hooks/useWeb3';
import { EColor } from '@theme/theme.enum';
import { FC } from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import Button from '../Button';
import WalletModal from '../WalletModal';
import { IWalletButton } from './WalletButton.type';

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
