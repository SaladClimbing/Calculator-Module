import { pvObject, toggleNoahModePersData } from '../config/persData';
import color from 'Colorizer';

register('command', () => {
	toggleNoahModePersData();
	ChatLib.chat(
		`${color.GOLD}NOAH MODE: ${color.YELLOW}${color.UNDERLINE}${pvObject.noahMode}`
	);
}).setName('noahmode');
