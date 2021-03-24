import { useState } from "react";
import { Alert, InputField } from "@kiwicom/orbit-components";
import { useQuery, useLazyQuery } from "@apollo/client";

import { ConvertArgs } from "../../interface/convert";
import ConvertQueryType from "./convert.graphql.type";
import convertQuery from "./convert.graphql";

export function Form() {
	const [inputValue, setInputValue] = useState("");
	const valueTrimmed = inputValue.trim();
	const { data } = useQuery<ConvertQueryType, ConvertArgs>(convertQuery, {
		variables: {
			number: valueTrimmed ? Number(valueTrimmed) : 0,
		},
	});

	return (
		<>
			<form onSubmit={(event) => event.preventDefault()}>
				<InputField
					inputMode="numeric"
					type="number"
					value={inputValue}
					onChange={(event) => setInputValue(event.currentTarget.value)}
				/>
			</form>
			{data ? <Alert>{data.convert.result.join(", ")}</Alert> : <span>Loading</span>}
		</>
	);
}
