/// <reference types="react-scripts" />

// web3 injected by wallet
interface Window {
	ethereum: any;
	'use-responsive-timeout': NodeJS.Timeout;
}
