import { NextApiRequest, NextApiResponse } from "next";
import { convertNumber } from "../../../server/convert";
import { ConvertData } from "../../../interface/convert";
import { isValidNumericString } from "../../../server/utils/validation";

export default (req: NextApiRequest, res: NextApiResponse<ConvertData>) => {
	const { number } = req.query;
	if (isValidNumericString(number)) {
		const result = convertNumber(number);
		res.status(200).json({ result });
	} else {
		res.status(400).json({ error: "Provided string is not numeric", result: [] });
	}
};
