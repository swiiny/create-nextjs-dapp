import React, { FC, useEffect } from 'react';
import Meta from '@components/common/Meta';
import { useRouter } from 'next/router';

const Error500: FC = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to home page
		router.push('/');
	}, [router]);

	return (
		<>
			<Meta title='500' />
		</>
	);
};

export default Error500;
