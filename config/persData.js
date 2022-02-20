import PVObject from 'PersistentData';

// NOTE Creates a persistent data object to store data
export const pvObject = new PVObject('Calculator', {
	noahMode: false,
	format: true,
	round: 3,
});

export function toggleNoahModePersData() {
	pvObject.noahMode = !pvObject.noahMode;
}

export function toggleFormattingPersData() {
	pvObject.format = !pvObject.format;
}
