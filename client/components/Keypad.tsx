import { FunctionComponent, memo } from "react";
import { Grid, Button, Box } from "@kiwicom/orbit-components";
import { keypad } from "../../constants/keypad";

interface KeypadProps {
	onKeyPress: (id: number) => void;
}

const KeypadComponent: FunctionComponent<KeypadProps> = ({ onKeyPress }) => {
	return (
		<Grid columns="1fr 1fr 1fr" rows="1fr 1fr 1fr" gap="8px" width="100%" dataTest="keypad">
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
				<Button
					key={idx}
					type="primarySubtle"
					onClick={() => onKeyPress(idx)}
					iconRight={<small>{keypad[idx].join("")}</small>}
				>
					{idx}
				</Button>
			))}
			<Box />
			<Button type="primarySubtle" onClick={() => onKeyPress(0)}>
				0
			</Button>
			<Box />
		</Grid>
	);
};

export const Keypad = memo(KeypadComponent);
