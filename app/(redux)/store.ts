import { configureStore, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./types"; // Import the RootState type

const initialState: RootState = {
	data: {
		data: null,
	},
};

// Define a slice to manage state
const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data.data = action.payload;
		},
	},
});

const store = configureStore({
	reducer: {
		data: dataSlice.reducer,
	},
});

export const { setData } = dataSlice.actions;

export default store;
