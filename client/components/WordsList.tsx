import { FunctionComponent, useState, useEffect } from "react";
import { Box, Tag } from "@kiwicom/orbit-components";
import s from "./WordsList.module.css";

interface WordsListProps {
	list: string[] | undefined;
	loading: boolean;
}

export const WordsList: FunctionComponent<WordsListProps> = ({ list, loading }) => {
	const [listToRender, setRenderList] = useState(list || []);

	useEffect(() => {
		if (list && !loading) {
			setRenderList(list);
		}
	}, [list, loading]);

	return (
		<Box className={s.wordsList} dataTest="wordsList">
			{listToRender.map((word, idx) => (
				<Tag key={`${idx}-${word}`} size="normal" dataTest="wordTag">
					{word}
				</Tag>
			))}
		</Box>
	);
};
