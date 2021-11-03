import { Reducer } from "redux";
import { functionReducerPokemonDetailRequest, functionReducerPokemonDetailSuccess, functionReducerPokemonListRequest, functionReducerPokemonListSuccess } from "./reducerFunctions";
import { IPokemonState, PokemonActionTypes } from "./types";

export const POKEMON_INITIAL_STATE: IPokemonState = {
    isLoading: false,
    data: [],
    nextRequest: null
}

const pokemonReducer: Reducer<IPokemonState> = (state = POKEMON_INITIAL_STATE, action) => {
    switch(action.type){

        case PokemonActionTypes.POKEMON_REQUEST:
            return functionReducerPokemonListRequest(state, action);
    
        case PokemonActionTypes.POKEMON_SUCCESS:
            return functionReducerPokemonListSuccess(state, action);

        case PokemonActionTypes.POKEMON_DETAIL_REQUEST:
            return functionReducerPokemonDetailRequest(state, action);

        case PokemonActionTypes.POKEMON_DETAIL_SUCCESS:
            return functionReducerPokemonDetailSuccess(state, action);

        default: return state;
    }
}

export default pokemonReducer;