import Button from "@mui/material/Button";

import { resetGame } from "../../../store/hangmanSlice";
import { useDispatch } from "react-redux";

interface GameOverProps {
	hasWon: boolean;
	word: string;
}

const GameOver = (props: GameOverProps) => {
	const dispatch = useDispatch();

	const handlePlayAgain = () => {
		dispatch(resetGame(null));
	};

	return (
		<div>
			{props.hasWon && <h3>You won!</h3>}
			{!props.hasWon && (
				<>
					<h3>Out of guesses.</h3>
					<p>The word was: {props.word}</p>
				</>
			)}
			<Button variant="contained" onClick={handlePlayAgain}>
				Play again
			</Button>
		</div>
	);
};

export default GameOver;
