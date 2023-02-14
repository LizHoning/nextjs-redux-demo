import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface HangmanState {
	guessedLetters: string[];
	word: string;
}

// Initial state
const initialState: HangmanState = {
	guessedLetters: [],
	word: "",
};

export const hangmanSlice = createSlice({
	name: "hangman",
	initialState,
	reducers: {
		resetGame(state) {
			state.guessedLetters = [];
			state.word = "";
		},

		addGuessedLetter(state, action) {
			state.guessedLetters = [...state.guessedLetters, action.payload];
		},

		setWord(state, action) {
			state.word = action.payload;
		},

		// Special reducer for hydrating the state. Special case for next-redux-wrapper
		extraReducers: {
			[HYDRATE]: (state, action) => {
				return {
					...state,
					...action.payload.hangman,
				};
			},
		},
	},
});

export const { resetGame, addGuessedLetter, setWord, setRandomWord } =
	hangmanSlice.actions;

export const selectGuessedLetters = (state: AppState) =>
	state.hangman.guessedLetters;
export const selectWord = (state: AppState) => state.hangman.word;

export default hangmanSlice.reducer;
