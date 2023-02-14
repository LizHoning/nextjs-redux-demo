import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import { useRef } from "react";

import { addGuessedLetter } from "../../../store/hangmanSlice";
import { useDispatch } from "react-redux";

const LetterInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();
	const [letter, updateLetter] = useState("");

	const handleLetterChange = (
		event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		const newValue = event.currentTarget.value;

		if (newValue.length <= 1) {
			updateLetter(newValue);
		}
	};

	const handleClick = (): void => {
		dispatch(addGuessedLetter(letter));
		updateLetter("");

		inputRef.current!.focus();
	};

	// also check if letter not guessed before & prevent submit if already guessed or not a letter
	const isDisabled = !letter.length;

	return (
		<div>
			<TextField
				id="outlined-basic"
				variant="outlined"
				onChange={handleLetterChange}
				value={letter}
				ref={inputRef}
			/>
			<Button
				disabled={isDisabled}
				onClick={handleClick}
				variant="contained"
			>
				Go
			</Button>
		</div>
	);
};

export default LetterInput;
