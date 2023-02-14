import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { hangmanSlice } from "./hangmanSlice";
import { tictactoeSlice } from "./tictactoeSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
	configureStore({
		reducer: {
			[hangmanSlice.name]: hangmanSlice.reducer,
			[tictactoeSlice.name]: tictactoeSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
