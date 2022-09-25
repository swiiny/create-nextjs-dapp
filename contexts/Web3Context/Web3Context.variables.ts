import { INetwork } from '@interfaces/network';
import { IWallet } from '@interfaces/wallet';

const WALLETS = {
	metamask: {
		name: 'MetaMask',
		srcLogo: '/assets/wallets/metamask-fox.svg'
	} as IWallet,
	walletConnect: {
		name: 'Wallet Connect',
		srcLogo: '/assets/wallets/wallet-connect.svg'
	} as IWallet
};

const WALLETS_ARRAY = Object.values(WALLETS);

const NETWORKS_DATA: any = {
	ethereum: {
		id: 'ethereum',
		name: 'Ethereum',
		ticker: 'ETH',
		rpc: process.env.RPC_ETHEREUM,
		networkId: 1
	} as INetwork,
	avalanche: {
		id: 'avalanche',
		name: 'Avalanche',
		ticker: 'AVAX',
		rpc: process.env.RPC_AVALANCHE,
		networkId: 43114
	} as INetwork
};

const NETWORKS_RPC: {
	[x: number]: string;
} = {
	[NETWORKS_DATA.ethereum.networkId]: NETWORKS_DATA.ethereum.rpc,
	[NETWORKS_DATA.avalanche.networkId]: NETWORKS_DATA.avalanche.rpc
};

const VALID_CHAIN_IDS: number[] = (Object.values(NETWORKS_DATA) as INetwork[])
	.map((n: INetwork): number => n.networkId || 0)
	.filter((n: number): boolean => n !== 0);

export { NETWORKS_DATA, VALID_CHAIN_IDS, WALLETS, WALLETS_ARRAY, NETWORKS_RPC };
