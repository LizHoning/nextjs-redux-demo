import { createSlice, current } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

type Thing = "" | "X" | "0";

// Type for our state
export interface TicTacTaeState {
	gameGrid: Thing[][];
	currentPlayer: "X" | "0";
}

// Initial state
const initialState: TicTacTaeState = {
	gameGrid: [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	],
	currentPlayer: "X",
};

export const tictactoeSlice = createSlice({
	name: "tictactoe",
	initialState,
	reducers: {
		updateSquare(state, action) {
			const { indexX, indexY, mark } = action.payload;
			state.gameGrid[indexX][indexY] = mark;

			let hasWon = false;
			const winningConditions = [
				[
					{ x: 0, y: 0 },
					{ x: 0, y: 1 },
					{ x: 0, y: 2 },
				],
				[
					{ x: 1, y: 0 },
					{ x: 1, y: 1 },
					{ x: 1, y: 2 },
				],
				[
					{ x: 2, y: 0 },
					{ x: 2, y: 1 },
					{ x: 2, y: 2 },
				],
				[
					{ x: 0, y: 0 },
					{ x: 1, y: 1 },
					{ x: 2, y: 2 },
				],
				[
					{ x: 0, y: 0 },
					{ x: 1, y: 0 },
					{ x: 2, y: 0 },
				],
				[
					{ x: 0, y: 1 },
					{ x: 1, y: 1 },
					{ x: 2, y: 1 },
				],
				[
					{ x: 0, y: 2 },
					{ x: 1, y: 2 },
					{ x: 2, y: 2 },
				],
				[
					{ x: 0, y: 2 },
					{ x: 1, y: 1 },
					{ x: 2, y: 0 },
				],
			];

			const winningCoords = winningConditions
				.map((meh) => {
					const gahg = meh.every((coords) => {
						let blehm = coords;
						let gahm = state.gameGrid;

						return gahm[blehm.x][blehm.y] === state.currentPlayer;
					});

					return gahg ? meh : null;
				})
				.filter((blahfg) => blahfg);

			if (winningCoords.length) {
				console.log(">> winning coords", winningCoords);
			} else {
				state.currentPlayer = state.currentPlayer === "X" ? "0" : "X";
			}
		},
	},
});

export const { updateSquare } = tictactoeSlice.actions;

export const selectGameGrid = (state: AppState) => state.tictactoe.gameGrid;
export const selectCurrentPlayer = (state: AppState) =>
	state.tictactoe.currentPlayer;

export default tictactoeSlice.reducer;
