import { IWallet } from '@interfaces/wallet';
import { VALID_CHAIN_IDS, WALLETS_ARRAY } from './Web3Context.variables';

const getWalletFromName = (name: string): IWallet | undefined => {
	return WALLETS_ARRAY.find((w) => w.name === name);
};

const checkIfNetworkIsValid = (networkId: number) => {
	return VALID_CHAIN_IDS.includes(networkId);
};

export { getWalletFromName, checkIfNetworkIsValid };
