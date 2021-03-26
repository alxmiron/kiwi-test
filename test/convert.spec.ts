import { convertNumber } from "../server/convert";

describe("convertNumber()", () => {
	it("should calculate 5-letters words", () => {
		const actual = convertNumber("27753");
		const expected = ["apple"];

		expect(actual).toEqual(expected);
	});
});
