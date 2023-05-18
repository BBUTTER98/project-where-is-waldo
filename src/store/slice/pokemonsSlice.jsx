import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
    name: "pokemon",
    initialState: [
        {name:"electrivire",horizontal:[832,894],vertical:[496,564], difficulty:"very easy", checked:false},
        {name:"butterfly",horizontal:[1000,1076],vertical:[402,476], difficulty:"easy", checked:false},
        {name:"weepinbell",horizontal:[413,502],vertical:[695,760], difficulty:"medium", checked:false},
        {name:"magnezone",horizontal:[903,1007],vertical:[477,521], difficulty:"hard", checked:false},
        {name:"cloyster",horizontal:[531,619],vertical:[417,491], difficulty:"very hard", checked:false},
    ],
    reducers:{
        checkedPokemon(state, action){
            const myState =  state.map((pokemon)=>{
                if(pokemon.name === action.payload){
                    return {
                        ...pokemon,
                        checked:true,
                    }
                }
                return pokemon
            })
            return myState
        }
    }
})
export const { checkedPokemon } = pokemonsSlice.actions