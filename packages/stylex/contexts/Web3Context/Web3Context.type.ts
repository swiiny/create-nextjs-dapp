import { IWallet } from '@interfaces/wallet';
import { WalletState } from '@web3-onboard/core';

interface IWeb3 {
	provider: WalletState['provider'] | null;
	accounts: WalletState['accounts'];
	networkId: number | undefined;
	isWalletModalOpen: boolean;
	setIsWalletModalOpen: (newState: boolean) => void;
	isValidNetwork: boolean;
	connectWallet: (wallet: IWallet) => void;
	disconnectWallet: () => void;
}

export type { IWeb3 };
