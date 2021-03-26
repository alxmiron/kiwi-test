import { FunctionComponent, memo, useState } from "react";
import { Box, ButtonLink, InputField } from "@kiwicom/orbit-components";
import { Remove as RemoveIcon } from "@kiwicom/orbit-components/lib/icons";
import { useQuery } from "@apollo/client";
import { Keypad } from "./Keypad";
import { WordsList } from "./WordsList";
import { ConvertArgs } from "../../interface/convert";
import { useDebounce } from "../hooks/useDebounce";
import ConvertQueryType from "./convert.graphql.type";
import convertQuery from "./convert.graphql";
import s from "./Form.module.css";

const FormComponent: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState("");
	const debouncedValue = useDebounce(inputValue, 300, { resetEmptyImmediately: true });
	const maxLength = 9;
	const { data, loading } = useQuery<ConvertQueryType, ConvertArgs>(convertQuery, {
		variables: {
			number: debouncedValue ? Number(debouncedValue.slice(0, maxLength)) : 0,
		},
	});

	const onKeyPress = (id: number) => setInputValue(`${inputValue}${id}`);
	const onInputClear = () => setInputValue("");

	return (
		<Box className={s.wrapperStack}>
			<Box className={s.resultList}>
				<WordsList list={data?.convert.result} loading={loading} />
			</Box>
			<Box className={s.inputContainer}>
				<InputField
					inputMode="numeric"
					type="number"
					value={inputValue}
					dataTest="numericInput"
					maxLength={100}
					error={inputValue.length >= maxLength ? "Max length is 9" : undefined}
					readOnly
					suffix={
						<ButtonLink
							compact
							type="secondary"
							iconLeft={<RemoveIcon />}
							onClick={onInputClear}
							dataTest="clearInputButton"
						/>
					}
				/>
			</Box>
			<Keypad onKeyPress={onKeyPress} />
		</Box>
	);
};

export const Form = memo(FormComponent);
