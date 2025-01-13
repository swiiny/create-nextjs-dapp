import { FC } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import Button from '../Button';
import Text from '../Text';
import { EFontWeight, ETextAlign, ETextType } from '../Text/Text.enum';
import { ICTA } from './CTA.type';

const cloneCmd = 'npx create-nextjs-dapp';

const CTA: FC<ICTA> = () => {
	return (
		<div className='flex flex-col items-center justify-center transform scale-90 sm:scale-100'>
			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={EColor.gray}
				weight={EFontWeight.normal}
				align={ETextAlign.center}
				className='flex flex-col items-center justify-center'
			>
				Start coding is easy as
				<Button color={EColor.lightBlue} valueToCopy={cloneCmd + '@latest'} customClasses='mt-8' noPaddingResponsive>
					{cloneCmd}
				</Button>
			</Text>
		</div>
	);
};

export { CTA };
