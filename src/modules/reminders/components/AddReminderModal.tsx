import style from "./AddReminderModal.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Icon from "@mui/material/Icon";

import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const AddReminderModal = () => {
	const [numberbleh, updateNumber] = useState(0);

	const gahBleh = (x: number) => {
		updateNumber(x);
	};

	const blargh = (sdf) => {
		updateNumber((num) => num + sdf);
	};

	return (
		<div className={style.modal}>
			<h2>Add reminder</h2>
			<TextField
				id="outlined-basic"
				label="Label"
				variant="outlined"
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<div className={style.meh}>
				Remind me in
				<div className={style.sdf}>
					<TextField
						id="outlined-basic"
						type="number"
						className={style.bah}
						value={numberbleh}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<div className={style.numberButtons}>
						<Button variant="contained" onClick={() => blargh(1)}>
							<KeyboardArrowUp />
						</Button>
						<Button variant="contained" onClick={() => blargh(-1)}>
							<KeyboardArrowDown />
						</Button>
					</div>
				</div>
				<div className={style.mehMeh}>
					<Button variant="contained" onClick={() => gahBleh(30)}>
						30
					</Button>
					<Button variant="contained" onClick={() => gahBleh(45)}>
						45
					</Button>
					<Button variant="contained" onClick={() => gahBleh(60)}>
						60
					</Button>
				</div>
				minutes
			</div>
		</div>
	);
};

export default AddReminderModal;
