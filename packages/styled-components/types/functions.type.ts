import { EMediaQuery } from '@theme/theme.enum';

type THiddenRangeValue = EMediaQuery | string | undefined;
type THiddenRange = [THiddenRangeValue, THiddenRangeValue];

export type { THiddenRange, THiddenRangeValue };
