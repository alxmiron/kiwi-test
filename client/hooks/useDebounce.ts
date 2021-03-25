import { useState, useEffect } from "react";

interface DebounceOptions {
	resetEmptyImmediately?: boolean;
}

export const useDebounce = <T>(value: T, delay: number, options: DebounceOptions = {}) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		let handler = 0;

		if (options?.resetEmptyImmediately && !value) {
			setDebouncedValue(value);
		} else {
			handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
		}

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};
