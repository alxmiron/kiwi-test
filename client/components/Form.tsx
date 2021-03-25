import { FunctionComponent, memo, useState } from "react";
import { Box, ButtonLink, InputField, Loading } from "@kiwicom/orbit-components";
import { Remove as RemoveIcon } from "@kiwicom/orbit-components/lib/icons";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Keypad } from "./Keypad";
import { WordsList } from "./WordsList";
import { ConvertArgs } from "../../interface/convert";
import { useDebounce } from "../hooks/useDebounce";
import ConvertQueryType from "./convert.graphql.type";
import convertQuery from "./convert.graphql";
import s from "./Form.module.css";

const FormComponent: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState("");
	const debouncedValue = useDebounce(inputValue, 500, { resetEmptyImmediately: true });
	const { data, loading } = useQuery<ConvertQueryType, ConvertArgs>(convertQuery, {
		variables: {
			number: debouncedValue ? Number(debouncedValue) : 0,
		},
	});

	const onKeyPress = (id: number) => {
		if (inputValue.length >= 10) return;
		setInputValue(`${inputValue}${id}`);
	};
	const onInputClear = () => setInputValue("");
	const shouldRenderLoader = !!(loading && inputValue);

	return (
		<Box className={s.wrapperStack}>
			<Box className={s.resultList}>
				<WordsList list={data?.convert.result} loading={loading} />
			</Box>
			<Box>{shouldRenderLoader && <Loading type="boxLoader" />}</Box>
			<Box className={s.inputContainer}>
				<InputField
					inputMode="numeric"
					type="number"
					value={inputValue}
					readOnly
					suffix={<ButtonLink compact type="critical" iconLeft={<RemoveIcon />} onClick={onInputClear} />}
				/>
			</Box>
			<Keypad onKeyPress={onKeyPress} />
		</Box>
	);
};

export const Form = memo(FormComponent);
