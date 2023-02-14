import ChancesDisplay from "./ChancesDisplay";
import LetterInput from "./LetterInput";
import WordDisplay from "./WordDisplay";
import GuessesDisplay from "./GuessesDisplay";
import WordSelect from "./WordSelect";
import GameOver from "./GameOver";
import style from "./Layout.module.css";

import { selectGuessedLetters, selectWord } from "../../../store/hangmanSlice";

import { useSelector } from "react-redux";

const Layout = () => {
	const guessedLetters = useSelector(selectGuessedLetters);
	const word = useSelector(selectWord);
	const gameStarted = Boolean(word);

	const wordLetters = word.split("");

	const remainingLetters = wordLetters.filter(
		(letter) => guessedLetters.indexOf(letter) === -1
	);

	const hasWon = !remainingLetters.length;

	const wrongLetters = guessedLetters.filter(
		(letter) => wordLetters.indexOf(letter) === -1
	);

	const wrongGuessesCount = wrongLetters.length;
	const gameOver = hasWon || wrongGuessesCount >= 7;

	return (
		<div className={style.hangman}>
			<h2>Hangman</h2>
			{!gameStarted && <WordSelect />}
			{gameStarted && (
				<>
					<ChancesDisplay guessesCount={wrongGuessesCount} />
					<WordDisplay />
					{gameOver && <GameOver hasWon={hasWon} word={word} />}
					{!gameOver && <LetterInput />}
					<GuessesDisplay
						guessedLetters={guessedLetters}
						wordLetters={wordLetters}
					/>
				</>
			)}
		</div>
	);
};

export default Layout;
