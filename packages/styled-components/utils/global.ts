// copy value to clipboard
export const copy = (value: string) => {
	try {
		const copyText = document.createElement('input');
		copyText.setAttribute('value', value);

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */

		/* Copy the text inside the text field */
		navigator.clipboard.writeText(copyText.value);
		return true;
	} catch {
		return false;
	}
};

export function getLocalStorage(key: string): string | Object | null {
	if (typeof window === 'undefined') {
		return null;
	}

	let item = localStorage.getItem(key);

	if (item) {
		try {
			// test if item is a stringyfied object
			item = JSON.parse(item);
		} catch {
			// is a string
			return item;
		}

		// return the parsed object
		return item;
	}

	return null;
}

export function setLocalStorage(key: string, value: string | Object): void {
	try {
		let toSaveValue = value;

		if (typeof toSaveValue === 'object') {
			toSaveValue = JSON.stringify(value);
		}

		localStorage.setItem(key, toSaveValue as string);
	} catch (err) {
		console.error('Error setting localStorage: ', err);
	}
}

export function removeLocalStorage(key: string): void {
	try {
		localStorage.removeItem(key);
	} catch (err) {
		console.error('Error removing localStorage: ', err);
	}
}

export function clearLocalStorage(): void {
	try {
		localStorage.clear();
	} catch (err) {
		console.error('Error clearing localStorage: ', err);
	}
}
