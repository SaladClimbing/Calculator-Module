// A function that displays a general error message
export function error() {
	ChatLib.chat(
		`${color.RED}${color.UNDERLINE}WOAH THERE BUCKO!` +
			`${color.RESET}${color.GOLD}` +
			`Something went wrong!`
	);
}
