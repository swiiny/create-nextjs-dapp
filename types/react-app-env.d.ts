/// <reference types="react-scripts" />

// web3 injected by wallet
interface Window {
	ethereum: any;
}

// Extend HTML DOM elements for React
declare module 'react' {
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		// extends React's HTMLAttributes
		as?: any; // Styled Components
	}
}
