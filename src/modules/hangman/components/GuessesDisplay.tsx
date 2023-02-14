import { useSelector } from "react-redux";
import { selectGuessedLetters } from "../../../store/hangmanSlice";
import style from "./GuessesDisplay.module.css";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

const GuessesDisplay = (props) => {
	const guessedLetters = useSelector(selectGuessedLetters);

	return (
		<div>
			<h3>Guessed letters:</h3>
			<div className={style.letterContainer}>
				{alphabet.map((letter) => {
					let letterClass = style.unguessedLetter;

					const meh = props.guessedLetters.filter(
						(guessedLetter) =>
							guessedLetter.toUpperCase() === letter
					);

					if (meh.length) {
						const bleh = props.wordLetters.filter(
							(wordLetter) => wordLetter.toUpperCase() === letter
						);

						letterClass = bleh.length
							? style.correctLetter
							: style.incorrectLetter;
					}

					// if letter in guessed letters = style.incorrectLetter
					// if letter in wordLetters = style.correctLetter

					return (
						<div
							key={letter}
							className={`${style.letter} ${letterClass}`}
						>
							{letter}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GuessesDisplay;
