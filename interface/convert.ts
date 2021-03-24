export interface ConvertArgs {
	number: number;
}

export interface ConvertData {
	result: string[];
	error?: string;
}

export interface QueryData {
	convert: ConvertData;
}
