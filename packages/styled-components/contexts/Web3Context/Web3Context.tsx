import Onboard, { WalletState } from '@web3-onboard/core';
import frameModule from '@web3-onboard/frame';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import { IWallet } from 'interfaces/wallet';
import { FC, ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from 'utils/global';
import { checkIfNetworkIsValid, getWalletFromName } from './Web3Context.functions';
import { IWeb3 } from './Web3Context.type';
import { NETWORKS, NETWORKS_DATA } from './Web3Context.variables';

// the key used to save the state in localStorage
const WalletLocalStorageKey = 'wallet';

export const Web3Context = createContext<IWeb3 | undefined>(undefined);

const Web3Provider: FC<{ children: ReactNode }> = ({ children }) => {
	const [provider, setProvider] = useState<WalletState['provider'] | null>(null);
	const [accounts, setAccounts] = useState<WalletState['accounts']>([]);
	const [networkId, setNetworkId] = useState<number | undefined>(undefined);
	const [isValidNetwork, setIsValidNetwork] = useState<boolean>(false);
	const [isWalletModalOpen, setIsWalletModalOpen] = useState<boolean>(false);

	const disconnectWallet = useCallback(() => {
		setProvider(null);
		setAccounts([]);

		clearLocalStorage();
	}, []);

	const connectWallet = useCallback(
		async (wallet: IWallet) => {
			try {
				// detect injected wallet providers
				const injected = injectedModule();
				// Frame wallet provider
				const frame = frameModule();

				// the list of wallet providers displayed in the BlockNative modal
				const walletProviders = [injected, frame];

				// Wallet Connect related code (is optional)
				if (process.env.WALLET_CONNECT_PROJECT_ID) {
					// Wallet Connect wallet provider
					const walletConnect = walletConnectModule({
						projectId: process.env.WALLET_CONNECT_PROJECT_ID,
						dappUrl: window.location.origin,
						requiredChains: [NETWORKS.ethereum],
						qrModalOptions: {
							themeVariables: {
								'--wcm-z-index': '999',
								'--wcm-font-family': 'Nunito',
								'--wcm-font-feature-settings': 'Nunito',
								'--wcm-background-color': '#1E1F20',
								'--wcm-accent-color': '#2467DF',
								'--wcm-accent-fill-color': '#2467DF',
								'--wcm-container-border-radius': '5px'
							}
						}
					});

					// add Wallet Connect wallet provider to the list of providers
					walletProviders.push(walletConnect);
				}

				const onboard = Onboard({
					wallets: walletProviders,
					theme: {
						'--w3o-background-color': '#121314',
						'--w3o-foreground-color': '#1E1F20',
						'--w3o-text-color': '#ffffff',
						'--w3o-border-color': '#979797',
						'--w3o-action-color': '#24DF9C',
						'--w3o-border-radius': '5px'
					},
					appMetadata: {
						name: 'Create NextJs Dapp',
						icon: '/path/to/icon.svg',
						logo: '/path/to/logo.svg',
						description: 'Create NextJs Dapp template'
					},
					connect: {
						autoConnectLastWallet: false,
						removeWhereIsMyWalletWarning: true
					},
					// activate or note the bottom right blocknative widget
					accountCenter: {
						desktop: {
							enabled: false
						},
						mobile: {
							enabled: false
						}
					},
					chains: Object.values(NETWORKS_DATA)
				});

				const wallets = await onboard.connectWallet();

				if (!wallets[0]) throw new Error('No wallet selected');

				setLocalStorage(WalletLocalStorageKey, wallet.name);

				setProvider(wallets[0].provider);
				setAccounts(wallets[0].accounts);
			} catch (err: any) {
				console.error('Error while connecting wallet', wallet.name, err);

				if (typeof err?.message === 'string' && err.message !== 'No wallet selected') {
					disconnectWallet();
				}
			}
		},
		[disconnectWallet]
	);

	/*
	 * get and update the network id
	 */
	const getNetworkId = async (chainId?: number) => {
		const networkId = chainId || (await window?.ethereum?.request({ method: 'eth_chainId' })) || undefined;

		if (networkId) {
			if (`${networkId}`.startsWith('0x')) {
				const intNetworkId = parseInt(networkId, 16);

				setNetworkId(intNetworkId);
				return;
			}

			setNetworkId(networkId);
		} else {
			console.error("can't get chain id");
			setNetworkId(undefined);
		}
	};

	/*
	 * function called when the app starts or on page refresh to check if the wallet is connected
	 */
	const checkIfWalletIsConnected = useCallback(async () => {
		const savedWalletName = getLocalStorage(WalletLocalStorageKey) as string;

		if (!savedWalletName) return;

		const savedWallet = getWalletFromName(savedWalletName);

		if (!savedWallet) return;

		connectWallet(savedWallet);
	}, [connectWallet]);

	// update isValidNetwork when networkId changes
	useEffect(() => {
		setIsValidNetwork(checkIfNetworkIsValid(networkId || 0));
	}, [networkId]);

	// check if wallet is connected when the app starts or on page refresh
	useEffect(() => {
		checkIfWalletIsConnected();
	}, [checkIfWalletIsConnected]);

	// setup provider listeners
	useEffect(() => {
		if (!provider) return;

		try {
			const handleChainChanged = (chainId: string) => {
				getNetworkId(Number(chainId));
			};

			const handleAccountsChanged = (accounts: string[]) => {
				if (accounts.length > 0) {
					//setAddress(Address.from(accounts[0]));
					console.log('accountsChanged', accounts);
				} else {
					// statement called when user disconnects their wallet from the wallet itself
					disconnectWallet();
				}
			};

			// set up listeners
			provider.on('chainChanged', handleChainChanged);
			provider.on('accountsChanged', handleAccountsChanged);

			return () => {
				provider.removeListener('chainChanged', handleChainChanged);
				provider.removeListener('accountsChanged', handleAccountsChanged);
			};
		} catch (err) {
			console.error('Error while initializing web3 listeners', err);
		}
	}, [disconnectWallet, provider]);

	/* debug */
	useEffect(() => {
		if (!accounts[0]) return;

		console.debug('address', accounts[0].address);
	}, [accounts]);

	/* debug */
	useEffect(() => {
		console.debug('networkId', networkId);
	}, [networkId]);

	useEffect(() => {
		console.debug('isValidNetwork', isValidNetwork);
	}, [isValidNetwork]);

	/* debug */
	useEffect(() => {
		getNetworkId();
	}, []);

	return (
		<Web3Context.Provider
			value={{
				provider,
				accounts,
				networkId,
				connectWallet,
				disconnectWallet,
				isValidNetwork,
				setIsWalletModalOpen,
				isWalletModalOpen
			}}
		>
			{children}
		</Web3Context.Provider>
	);
};

export { Web3Provider };
