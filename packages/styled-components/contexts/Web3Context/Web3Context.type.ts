import { IWallet } from '@interfaces/wallet';
import Address from '@models/Address';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers } from 'ethers';

interface IWeb3 {
	provider: IWeb3Provider;
	address: Address | undefined;
	networkId: number | undefined;
	isWalletConnected: boolean;
	isWalletModalOpen: boolean;
	walletName: string | undefined;
	ens: string | undefined;
	isConnectingWallet: boolean;
	isValidNetwork: boolean;
	connectWallet: (wallet: IWallet) => void;
	setIsWalletModalOpen: (newState: boolean) => void;
	disconnectWallet: () => void;
}

interface IWeb3Provider {
	web3Provider?: providers.Web3Provider;
	web3Instance?: WalletConnectProvider | any;
	isWallet?: boolean;
	error?: boolean;
}

export type { IWeb3Provider, IWeb3 };
