export function isValidNumericString(value: any): value is string {
	return typeof value === "string" && !isNaN(Number(value));
}
