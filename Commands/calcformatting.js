import { pvObject, toggleFormattingPersData } from '../config/persData';
import color from 'Colorizer';

register('command', () => {
	toggleFormattingPersData();
	ChatLib.chat(
		`${color.GOLD}FORMATTING: ${color.YELLOW}${color.UNDERLINE}${pvObject.format}`
	);
});

export function formatNumber(number, decimal) {
	let numberFormatted;
	decimal = Math.round(decimal * (pvObject.round * 10)) / (pvObject.round * 10);
	if (pvObject.format) {
		if (pvObject.noahMode) {
			numberFormatted = number.replace(/(.)(?=(\d{3})+$)/g, '$1.');
			if (decimal == 0) return numberFormatted;
			numberFormatted =
				numberFormatted +
				decimal.toString().slice(1, decimal.length).replace('.', ',');
			return numberFormatted;
		} else {
			numberFormatted = number.replace(/(.)(?=(\d{3})+$)/g, '$1,');
			if (decimal == 0) return numberFormatted;
			numberFormatted =
				numberFormatted + decimal.toString().slice(1, decimal.length);
			return numberFormatted;
		}
	} else {
		numberFormatted = number + decimal.toString().slice(1, decimal.length);
		return numberFormatted;
	}
}

export function checkSpeedLetters(number, args) {
	switch (number.slice(number.length - 1, number.length).toLowerCase()) {
		case 'k':
			return parseFloat(number) * 1000;
		case 'm':
			return parseFloat(number) * 1000000;
		case 'b':
			return parseFloat(number) * 1000000000;
		default:
			return parseFloat(number);
	}
}
