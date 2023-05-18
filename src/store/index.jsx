import { configureStore } from "@reduxjs/toolkit";
import { checkedPokemon, pokemonsSlice } from "./slice/pokemonsSlice";
import { addTime, timeSlice } from "./slice/timeSlice";

export const store = configureStore({
	reducer: {
		pokemons: pokemonsSlice.reducer,
		time: timeSlice.reducer,
	},
});
export { checkedPokemon, addTime };
