import React, { FC } from 'react';
import { ICTA } from './CTA.type';
import Text from '../Text';
import { EColor, ESize } from 'theme/theme.enum';
import { ETextType, EFontWeight, ETextAlign } from '../Text/Text.enum';
import Button from '../Button';
import styles from './CTA.module.scss';

const cloneCmd = 'npx create-nextjs-dapp';

const CTA: FC<ICTA> = () => {
	return (
		<div className={styles.container}>
			<Text
				type={ETextType.h2}
				size={ESize.s}
				color={EColor.gray}
				weight={EFontWeight.regular}
				align={ETextAlign.center}
				className={styles.text}
			>
				Start coding is easy as
				<Button color={EColor.lightBlue} valueToCopy={cloneCmd + '@latest'} noPaddingResponsive>
					{cloneCmd}
				</Button>
			</Text>
		</div>
	);
};

export { CTA };
