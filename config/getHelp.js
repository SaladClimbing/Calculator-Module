import color from 'Colorizer';

export function getHelp() {
	ChatLib.chat(
		`${color.GOLD}--------------HELP--------------` +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'- Usage: /ca [number] [operator] [number]' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'- Aliases: /ca, /calc' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'- This calculator only supports single operation functions' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'Supported operations: addition (+), subtraction (-), multiplication (*), division (/), division with remainders (%)' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'Example: /ca 1 + 2' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'Example of something that wont work: /ca 1 + 3 + 5' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'Do /ca advhelp for more details' +
			'\n' +
			`${color.GOLD}--------------------------------`
	);
}

export function getAdvHelp() {
	ChatLib.chat(
		`${color.GOLD}--------------ADVH--------------` +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			'- Operations:' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`   ` +
			'Addition (+): Add the two numbers together' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`       ` +
			'(/ca [number] + [number])' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`   ` +
			'Subtraction (-): Subtracts the second number from the first' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`       ` +
			'(/ca [number] - [number])' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`   ` +
			'Mulitplication (*): Multiplies the two numbers together' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`       ` +
			'(/ca [number] * [number])' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`   ` +
			'Division (/): Divides the first number by the second number' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`       ` +
			'(/ca [number] / [number])' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`   ` +
			'Modulo or Division with remainders (%): Divides the first nnumber by the second number and gives the remaining number' +
			'\n' +
			`${color.RESET}${color.YELLOW}` +
			`       ` +
			'(/ca [number] % [number])' +
			'\n' +
			`${color.RESET}${color.GOLD}--------------------------------`
	);
}
