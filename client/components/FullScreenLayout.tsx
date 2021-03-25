import { FunctionComponent } from "react";
import s from "./FullScreenLayout.module.css";

export const FullScreenLayout: FunctionComponent = ({ children }) => {
	return <div className={s.container}>{children}</div>;
};
