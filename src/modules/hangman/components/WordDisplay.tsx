import { useSelector } from "react-redux";
import { selectGuessedLetters, selectWord } from "../../../store/hangmanSlice";

const WordDisplay = () => {
	const guessedLetters = useSelector(selectGuessedLetters);
	const word = useSelector(selectWord);
	const wordLetters = word.split("");

	return (
		<div>
			{wordLetters.map((letter) => {
				if (guessedLetters.indexOf(letter) > -1) {
					return letter;
				}
				return "_";
			})}
		</div>
	);
};

export default WordDisplay;
