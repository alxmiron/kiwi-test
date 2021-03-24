import { IResolvers, IResolverObject, IFieldResolver } from "graphql-tools";
import { convertNumber } from "../convert";
import { ConvertArgs } from "../../interface/convert";

const convert: IFieldResolver<any, any, ConvertArgs> = (_parent, args) => {
	const { number } = args;
	const result = convertNumber(number.toString());
	return {
		result,
	};
};

const Query: IResolverObject = {
	convert,
};

export const resolvers: IResolvers = {
	Query,
};
