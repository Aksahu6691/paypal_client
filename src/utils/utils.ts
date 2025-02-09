// common utils methods
export const isObjectEmpty = (obj: unknown): boolean => {
	return !obj || (typeof obj === 'object' && Object.keys(obj || {}).length === 0);
};

export const isArrayEmpty = (arr: unknown): boolean => {
	return !arr || (Array.isArray(arr) && arr.length === 0);
};

export const getMessageFromError = (error: unknown): string => {
	let message = 'Something went wrong';

	if (typeof error === 'string') {
		message = error;
	} else if (error instanceof Error) {
		// Always put this at last
		message = error.message;
	}

	return message;
};

// INFO :- utils to check if key is valid in the object
export const isValidKey = (key: string, obj: object): key is keyof typeof obj => key in obj;

// INFO :- Format a given size in bytes to a human-readable format like KB and MB.
export const formatSize = (size: number): string => {
	if (size < 1024) return `${size} bytes`;
	if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
	return `${(size / 1048576).toFixed(2)} MB`;
};

export const formatNumberToRupees = (amount: string | number): string => {
	const num = Number(amount);
	if (isNaN(num)) return '₹0';

	const formattedNum = num.toLocaleString('en-IN', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	});

	return `₹${formattedNum}`;
};
