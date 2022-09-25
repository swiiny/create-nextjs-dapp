import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IPortal } from './Portal.type';

// client only portal
const Portal: FC<IPortal> = ({ children, selector }) => {
	const ref = useRef<any | undefined>();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		ref.current = document.querySelector(selector);
		setMounted(true);
	}, [selector]);

	return mounted ? createPortal(children, ref.current) : null;
};

export { Portal };
