import { IWallet } from '@interfaces/wallet';
import Address from '@models/Address';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers } from 'ethers';

interface IWeb3 {
	provider: IWeb3Provider;
	address: Address | undefined;
	networkId: number | undefined;
	isWalletConnected: boolean;
	walletName: string | undefined;
	isConnectWalletModalOpen: boolean;
	isConnectingWallet: boolean;
	isValidNetwork: boolean;
	setIsConnectWalletModalOpen: (newState: boolean) => void;
	connectWallet: (wallet: IWallet) => void;
	disconnectWallet: () => void;
}

interface IWeb3Provider {
	web3Provider?: providers.Web3Provider;
	web3Instance?: WalletConnectProvider | any;
	isWallet?: boolean;
	error?: boolean;
}

export type { IWeb3Provider, IWeb3 };
