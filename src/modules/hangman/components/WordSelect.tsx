import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import { setWord } from "../../../store/hangmanSlice";
import { useDispatch } from "react-redux";
import style from "./WordSelect.module.css";

const WordSelect = () => {
	const dispatch = useDispatch();
	const [word, updateWord] = useState("");

	const handleWordChange = (
		event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		// const target = event.target as HTMLInputElement;
		// const newValue = target.value;
		const newValue = event.currentTarget.value;

		updateWord(newValue);
	};

	const handleUseWordClick = (): void => {
		dispatch(setWord(word));
	};

	const handleRandomWordClick = (): void => {
		const randomWord = "testing";
		dispatch(setWord(randomWord));
	};

	return (
		<div className={style.wordSelect}>
			<h3>How would you like to play?</h3>
			<p>Enter a word (3+ letters):</p>
			<TextField
				id="outlined-basic"
				className={style.wordInput}
				variant="outlined"
				onChange={handleWordChange}
				value={word}
			/>
			<div className={style.bleh} />
			<Button
				disabled={word.length < 3}
				onClick={handleUseWordClick}
				variant="contained"
			>
				Use this word
			</Button>
			<p className={style.gah}>or</p>
			<Button onClick={handleRandomWordClick} variant="contained">
				Use random word
			</Button>
		</div>
	);
};

export default WordSelect;
