import { useDispatch, useSelector } from "react-redux";
import {
	selectGameGrid,
	selectCurrentPlayer,
	updateSquare,
} from "../../../store/tictactoeSlice";
import Button from "@mui/material/Button";

// not necessary to specify v
const GameBoard = (): JSX.Element => {
	const gameGrid = useSelector(selectGameGrid);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const dispatch = useDispatch();

	const handleSquareClick = (indexX: number, indexY: number) => {
		dispatch(updateSquare({ indexX, indexY, mark: currentPlayer }));
	};

	return (
		<div>
			<h3>Current player: {currentPlayer}</h3>
			{gameGrid.map((gah, indexX) => {
				return (
					<div key={indexX}>
						{gah.map((meh, indexY) => {
							const btn = (
								<Button
									key={indexY}
									variant="contained"
									onClick={() =>
										handleSquareClick(indexX, indexY)
									}
								>
									[]
								</Button>
							);
							return meh || btn;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default GameBoard;
