'use client';

import Web3Provider from '@contexts/Web3Context';
import { ReactNode } from 'react';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
	return <Web3Provider>{children}</Web3Provider>;
};
