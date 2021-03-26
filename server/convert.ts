import { keypad } from "../constants/keypad";
import { getDictionary } from "./dictionary";

const dictionaryTree = getDictionary(20);

/**
 * Merges 2 plain arrays creating all possible combinations
 * Example: collectionA ["a", "b", "c"], collectionB ["d", "e", "f"] ->
 *   -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * Complexity: O(A * B), where A = collectionA.length, B = collectionB.length
 */
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

/**
 * Converts numeric string (like "23") to a list of possible word combinations
 * Example: "23" -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * Complexity: O(4^N), where N is numberStr.length
 * 4 is a maximum amount of letters assigned to a key number
 */
export function convertNumber(numberStr: string): string[] {
	if (numberStr.length === 0) return [];
	if (numberStr.length === 1) return keypad[numberStr];
	const firstKey = numberStr[0];
	return mergeCombinations(keypad[firstKey], convertNumber(numberStr.slice(1)));
}
