import * as stylex from '@stylexjs/stylex';
import { EColor } from './theme.enum';
import { colors } from './theme.stylex';

export function getColorStyle(color: EColor) {
	return stylex.create({
		color: colors[color]
	});
}
