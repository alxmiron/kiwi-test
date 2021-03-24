import type { NextApiRequest, NextApiResponse } from "next";
import { convertNumber } from "../../../utils/convert";
import { ConvertResponse } from "../../../interface/convert";

export default (req: NextApiRequest, res: NextApiResponse<ConvertResponse>) => {
	const { number: numberStr } = req.query;
	if (validateNumber(numberStr)) {
		const result = convertNumber(numberStr);
		res.status(200).json({ result });
	} else {
		res.status(400).json({ error: "Provided string is not numeric", result: [] });
	}
};

function validateNumber(value: any): value is string {
	return typeof value === "string" && !isNaN(Number(value));
}
