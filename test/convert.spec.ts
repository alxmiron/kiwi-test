import { convertNumber } from "../server/convert";

describe("convertNumber()", () => {
	it("should calculate 2-letters words", () => {
		const actual = convertNumber("23");
		const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

		expect(actual).toEqual(expected);
	});
});
