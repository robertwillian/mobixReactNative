import { Reducer } from "redux";
import { IPokemonState } from "./types";

export const POKEMON_INITIAL_STATE: IPokemonState = {
    isLoading: false,
    data: []
}

const pokemonReducer: Reducer<IPokemonState> = (state = POKEMON_INITIAL_STATE, action) => {
    switch(action.type){

        default: return state;
    }
}

export default pokemonReducer;