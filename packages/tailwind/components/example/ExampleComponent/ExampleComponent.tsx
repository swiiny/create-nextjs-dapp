import React, { FC } from 'react';
import { IExampleComponent } from './ExampleComponent.type';
import './ExampleComponent.styles';

const ExampleComponent: FC<IExampleComponent> = () => {
	return (
		<div className='example-component'>
			<></>
		</div>
	);
};

export { ExampleComponent };
