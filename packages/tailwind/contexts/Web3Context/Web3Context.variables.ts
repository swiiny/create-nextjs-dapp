import { INetwork } from '@interfaces/network';

const NETWORKS = {
	ethereum: 1,
	goerli: 5,
	optimism: 10,
	goerliOptimism: 420,
	avalanche: 43114,
	fuji: 43113 // to verify
};

const WALLETS = {
	blocknative: {
		name: 'BlockNative',
		srcLogo: '/assets/logo-metamask-color.svg'
	}
};

const WALLETS_ARRAY = Object.values(WALLETS);

const NETWORKS_DATA = {
	[NETWORKS.ethereum]: {
		id: NETWORKS.ethereum,
		name: 'Ethereum',
		token: 'ETH',
		rpcUrl: process.env.RPC_ETHEREUM || 'https://mainnet.infura.io/v3/YOUR_API_KEY'
	},
	[NETWORKS.avalanche]: {
		id: NETWORKS.avalanche,
		name: 'Avalanche',
		token: 'AVAX',
		rpcUrl: process.env.RPC_AVALANCHE || 'https://api.avax.network/ext/bc/C/rpc'
	}
};

const NETWORKS_RPC = {
	[NETWORKS.ethereum]: NETWORKS_DATA[NETWORKS.ethereum].rpcUrl,
	[NETWORKS.avalanche]: NETWORKS_DATA[NETWORKS.avalanche].rpcUrl
};

const VALID_CHAIN_IDS: number[] = (Object.values(NETWORKS_DATA) as INetwork[])
	.map((n: INetwork): number => n.id || 0)
	.filter((n: number): boolean => n !== 0);

export { NETWORKS, NETWORKS_DATA, NETWORKS_RPC, VALID_CHAIN_IDS, WALLETS, WALLETS_ARRAY };
