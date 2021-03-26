import fs from "fs";
import path from "path";
import * as wordlist from "wordlist-english";

export interface WordDictionary extends Record<string, WordDictionary | string | undefined> {}
type DictionaryFreqCategory = 10 | 20 | 35 | 40 | 50 | 55 | 60 | 70;

const dictionaryPath = path.join(__dirname, "./dictionary.json");

function addWordToDictionary(subWord: string, fullWord: string, dictionary: WordDictionary): WordDictionary {
	if (!subWord.length) {
		dictionary.word = fullWord;
		return dictionary;
	}
	const letter = subWord[0];
	const nestedTree = dictionary[letter];
	const nextTree = typeof nestedTree === "object" ? nestedTree : {};
	dictionary[letter] = addWordToDictionary(subWord.slice(1), fullWord, nextTree);
	return dictionary;
}

export function buildDictionaryTree(freqCategory?: DictionaryFreqCategory, saveLocally = false) {
	const targetWords: string[] = wordlist[freqCategory ? `english/${freqCategory}` : "english"];
	console.log(
		`Building English dictionary for ${targetWords.length} words.`,
		freqCategory ? `freqCategory: ${freqCategory}` : ""
	);
	const tree = targetWords.reduce((dictionary, word) => {
		return addWordToDictionary(word, word, dictionary);
	}, {} as WordDictionary);
	if (saveLocally) {
		fs.writeFileSync(dictionaryPath, JSON.stringify(tree));
	}
	return tree;
}

export function getDictionary(freqCategory?: DictionaryFreqCategory): WordDictionary {
	if (fs.existsSync(dictionaryPath)) {
		const dictionary: WordDictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf8"));
		return dictionary;
	}
	const dictionary = buildDictionaryTree(freqCategory);
	return dictionary;
}
