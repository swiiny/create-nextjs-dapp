import Address from '@models/Address';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers, providers } from 'ethers';
import { IWallet } from 'interfaces/wallet';
import React, { createContext, FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from 'utils/global';
import { checkIfNetworkIsValid, getWalletFromName } from './Web3Context.functions';
import { IWeb3, IWeb3Provider } from './Web3Context.type';
import { NETWORKS_RPC, WALLETS } from './Web3Context.variables';

// the key used to save the state in localStorage
const WalletLocalStorageKey = 'wallet';

export const Web3Context = createContext<IWeb3 | undefined>(undefined);

const defaultProvider = { error: true };
const Web3Provider: FC<{ children: ReactNode }> = ({ children }) => {
	const [provider, setProvider] = useState<IWeb3Provider>({ error: true });
	const [address, setAddress] = useState<Address | undefined>(undefined);
	const [networkId, setNetworkId] = useState<number | undefined>(undefined);
	const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
	const [walletName, setWalletName] = useState<string | undefined>(undefined);
	const [isWalletModalOpen, setIsWalletModalOpen] = useState<boolean>(false);
	const [isConnectingWallet, setIsConnectingWallet] = useState<boolean>(false);
	const [isValidNetwork, setIsValidNetwork] = useState<boolean>(false);
	const [ens, setEns] = useState<string | undefined>(undefined);

	const disconnectWallet = useCallback(() => {
		setProvider(defaultProvider);
		setAddress(undefined);
		setEns(undefined);
		setIsWalletConnected(false);
		setWalletName(undefined);

		clearLocalStorage();
	}, []);

	const initWeb3Listeners = useCallback(
		(provider: any) => {
			if (provider) {
				try {
					provider.on('chainChanged', (chainId: number): void => {
						getNetworkId(chainId);

						// reload page
						window.location.reload();
					});

					provider.on('accountsChanged', async (accounts: string[]) => {
						if (accounts.length > 0) {
							setAddress(Address.from(accounts[0]));
						} else {
							// statement called when used disconnects himself from metamask
							disconnectWallet();
						}
					});

					// used to detect if the user disconnect himself from WalletConnect
					provider.on('disconnect', async () => {
						// check if the wallet is WalletConnect because if it's metamask then it's triggered when change to a none supported network
						if (walletName === WALLETS.walletConnect.name) {
							disconnectWallet();
						}
					});
				} catch (err) {
					console.error('Error while initializing web3 listeners', err);
				}
			}
		},
		[disconnectWallet, walletName]
	);

	const connectWallet = useCallback(
		async (wallet: IWallet) => {
			setIsConnectingWallet(true);

			try {
				let newProvider;

				switch (wallet.name) {
					case WALLETS.metamask.name:
						const web3Instance = window.ethereum;

						const accounts = await web3Instance.request({ method: 'eth_requestAccounts' });

						setAddress(Address.from(accounts[0]));

						const web3provider = new providers.Web3Provider(web3Instance);

						setProvider({
							web3Provider: web3provider,
							web3Instance: web3Instance
						});

						initWeb3Listeners(window.ethereum);

						break;
					case WALLETS.walletConnect.name:
						newProvider = new WalletConnectProvider({
							rpc: NETWORKS_RPC
						});

						// or
						// newProvider = new WalletConnectProvider({
						// 	infuraId: YOUR_INFURA_ID // Required
						// });

						await newProvider.enable();

						const web3Provider = new providers.Web3Provider(newProvider);
						setProvider({
							web3Provider,
							web3Instance: newProvider
						});

						setAddress(Address.from(newProvider?.accounts[0]));

						initWeb3Listeners(newProvider);

						break;
					default:
						break;
				}

				setLocalStorage(WalletLocalStorageKey, wallet.name);
				setWalletName(wallet.name);
				setIsWalletModalOpen(false);
				setIsWalletConnected(true);
				setIsConnectingWallet(false);
			} catch (err) {
				console.error("Couldn't connect to wallet", wallet.name, err);
				setIsConnectingWallet(false);
				disconnectWallet();
			}
		},
		[disconnectWallet, initWeb3Listeners]
	);

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

	const checkIfWalletIsConnected = useCallback(async () => {
		const savedWalletName = getLocalStorage(WalletLocalStorageKey) as string;

		if (savedWalletName) {
			const savedWallet = getWalletFromName(savedWalletName);

			if (savedWallet) {
				connectWallet(savedWallet);
				return 0;
			}

			return 1;
		}

		return 0;
	}, [connectWallet]);

	const checkIfUserHasEns = useCallback(
		async (address: Address, web3Provider: ethers.providers.Web3Provider) => {
			if (address && networkId) {
				let ethereumProvider;

				if (networkId === 1) {
					ethereumProvider = web3Provider;
				} else {
					ethereumProvider = new ethers.providers.JsonRpcProvider(
						process.env.RPC_ETHEREUM || 'https://rpc.ankr.com/eth'
					);
				}

				const resolver = await ethereumProvider?.lookupAddress(address.toString());

				if (resolver) {
					setEns(resolver);
				}
			}
		},
		[networkId]
	);

	useEffect(() => {
		setIsValidNetwork(checkIfNetworkIsValid(networkId || 0));
	}, [networkId]);

	useEffect(() => {
		checkIfWalletIsConnected();
	}, [checkIfWalletIsConnected]);

	useEffect(() => {
		if (address && provider?.web3Provider) {
			checkIfUserHasEns(address, provider.web3Provider);
		}
	}, [address, checkIfUserHasEns, provider?.web3Provider]);

	useEffect(() => {
		console.debug('address', address?.toString());
	}, [address]);

	useEffect(() => {
		console.debug('networkId', networkId);
	}, [networkId]);

	useEffect(() => {
		console.debug('isValidNetwork', isValidNetwork);
	}, [isValidNetwork]);

	useEffect(() => {
		getNetworkId();
	}, []);

	return (
		<Web3Context.Provider
			value={{
				provider,
				address,
				networkId,
				isWalletConnected,
				connectWallet,
				disconnectWallet,
				walletName,
				ens,
				isConnectingWallet,
				isValidNetwork,
				isWalletModalOpen,
				setIsWalletModalOpen
			}}
		>
			{children}
		</Web3Context.Provider>
	);
};

export { Web3Provider };
