import { EHtmlTag } from '@theme/theme.enum';
import { ReactNode } from 'react';

interface IGradientContainer {
	children: ReactNode;
	component?: EHtmlTag;
	className?: string;
}

export type { IGradientContainer };
