import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { FC } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import { ITagline } from './Tagline.type';

const Tagline: FC<ITagline> = () => {
	return (
		<div className='mx-auto'>
			<Text
				type={ETextType.h1}
				component={ETextType.h2}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
				className={'mb-3'}
			>
				{`Starter to create `}
				<Text
					type={ETextType.span}
					className={`bg-gradient-to-r from-${EColor.blueGradientFrom} to-${EColor.blueGradientTo} text-transparent bg-clip-text inline-block`}
				>
					Dapps
				</Text>
				{' with '}
				<Text
					type={ETextType.span}
					className={`bg-gradient-to-r from-${EColor.blueGradientFrom} to-${EColor.blueGradientTo} text-transparent bg-clip-text inline-block`}
				>
					Next
				</Text>
				{', '}
				<Text
					type={ETextType.span}
					className={`bg-gradient-to-r from-${EColor.blueGradientFrom} to-${EColor.blueGradientTo} text-transparent bg-clip-text inline-block`}
				>
					React
				</Text>
				{' and '}
				<Text
					type={ETextType.span}
					className={`bg-gradient-to-r from-${EColor.blueGradientFrom} to-${EColor.blueGradientTo} text-transparent bg-clip-text inline-block`}
				>
					Ethers
				</Text>
			</Text>

			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={EColor.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
			>
				No longer waste valuable time building your project structure
			</Text>
		</div>
	);
};

export { Tagline };
