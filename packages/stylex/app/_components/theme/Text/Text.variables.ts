import { ESize } from 'styles/theme.enum';
import { ETextType } from './Text.enum';

export const textTypeStylexKeyMap = (size: ESize) => ({
	[ETextType.h1]: 'headingOne' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.h2]: 'headingTwo' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.h3]: 'headingThree' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.h4]: 'headingFour' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.h5]: 'headingFive' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.h6]: 'headingSix' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.p]: 'p' + size.charAt(0).toUpperCase() + size.slice(1),
	[ETextType.span]: 'p' + size.charAt(0).toUpperCase() + size.slice(1)
});
