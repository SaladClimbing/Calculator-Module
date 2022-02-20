import color from 'Colorizer';
import { error } from '../config/error';
import { formatNumber, checkSpeedLetters } from './calcformatting';
import { getHelp, getAdvHelp } from '../config/getHelp';

const operations = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b,
	'%': (a, b) => a % b,
};
const completeOperation = (op, a, b) => operations[op](a, b);

register('command', calculate).setName('calc');
register('command', calculate).setName('ca');

function calculate(...args) {
	// NOTE Checks if the amount of arguments is even or odd, if odd, itll run
	if (args[0] == 'advhelp') {
		getAdvHelp();
		return;
	}
	if (args.length == 0 || args[0] == 'help') {
		getHelp();
		return;
	}
	if (args.length % 2 != 0) {
		// NOTE Loops through all the arguments and stores the index argument as the variable argument
		for (let argument = 0; argument < args.length; argument++) {
			let arg = args[argument];
			// NOTE Checks if the argument being passed is a number or an operator
			if (!isNaN(parseInt(arg))) continue;
			// NOTE This is where we do all the math
			let num1 = checkSpeedLetters(args[argument - 1]);
			let num2 = checkSpeedLetters(args[argument + 1]);
			if (arg != '%') {
				let equals = completeOperation(arg, num1, num2);
				let decimal = equals - Math.trunc(equals);
				let number = Math.trunc(equals).toString();
				// REVIEW Checks if we want to format the number and if so, do some fancy regex magic and format the number
				let formattedNumber = formatNumber(number, decimal);
				// NOTE Chat back the number in bold green font
				displayNumber(formattedNumber, number);
			} else if (arg == '%') {
				let quotent = Math.trunc(completeOperation('/', num1, num2));
				let remainder = modulo(num1, num2);
				let stringToBeDisplayed =
					formatNumber(quotent.toString(), 0) +
					' R: ' +
					formatNumber(remainder.toString(), 0);
				displayNumber(stringToBeDisplayed, quotent);
			} else {
				error();
			}
		}
	}
}

function modulo(num1, num2) {
	let remainder = num1;
	for (let i = 0; i < num2; i++) {
		remainder -= num2;
		if (remainder < num2) return remainder;
	}
}

function displayNumber(number, clickNumber) {
	new TextComponent(`${color.GREEN}${color.BOLD}` + number)
		.setHover('show_text', `${color.GREEN}Click this to copy`)
		.setClick('run_command', `/ct copy ${clickNumber}`)
		.chat();
}
