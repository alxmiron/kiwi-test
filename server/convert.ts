import { keypad } from "../constants/keypad";
import { WordDictionary, getDictionary } from "./dictionary";

const dictionaryTree = getDictionary();

/**
 * Converts numeric string (like "27753") to a list of possible word combinations
 * Example: "27753" -> ["apple"]
 * Complexity: O(4^N), where N is numberStr.length
 * 4 is a maximum amount of letters assigned to a key number
 */
function convertNumberRecur(numberStr: string, prefix: string, dictTree: WordDictionary): string[] {
	if (numberStr.length === 0) {
		if (!prefix) return [];
		if (dictTree.word) return [prefix];
		return [`${prefix}...`];
	}
	const firstKey = numberStr[0];
	const firstLetters: string[] = keypad[firstKey];
	const filteredLetters = firstLetters.filter((letter) => !!dictTree[letter]);
	const nextPrefixes = filteredLetters.map((letter) => `${prefix}${letter}`);
	const nextNumberStr = numberStr.slice(1);
	return nextPrefixes.reduce((acc, nextPrefix, idx) => {
		const firstLetter = filteredLetters[idx];
		const nestedDictTree = dictTree[firstLetter];
		const nextNestedDictTree = typeof nestedDictTree === "object" ? nestedDictTree : {};
		return acc.concat(convertNumberRecur(nextNumberStr, nextPrefix, nextNestedDictTree));
	}, [] as string[]);
}

export function convertNumber(numberStr: string): string[] {
	const result = convertNumberRecur(numberStr, "", dictionaryTree);
	return result;
}
