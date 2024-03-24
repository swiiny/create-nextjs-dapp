import Meta from '@components/common/Meta';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';

const Error404: FC = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to home page
		router.push('/');
	}, [router]);

	return (
		<>
			<Meta title='404' />
		</>
	);
};

export default Error404;
