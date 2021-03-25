import { keypad } from "../constants/keypad";

function mergeCombinations(collectionA: string[], collectionB: string[]): string[] {
	if (!collectionA.length) return collectionB;
	if (!collectionB.length) return collectionA;
	return collectionA.reduce((acc, itemA) => {
		collectionB.forEach((itemB) => {
			acc.push(`${itemA}${itemB}`);
		});
		return acc;
	}, [] as string[]);
}

export function convertNumber(numberStr: string): string[] {
	if (numberStr.length === 0) return [];
	if (numberStr.length === 1) return keypad[numberStr];
	const firstKey = numberStr[0];
	return mergeCombinations(keypad[firstKey], convertNumber(numberStr.slice(1)));
}
