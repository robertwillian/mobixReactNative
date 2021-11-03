import { AnyAction } from "redux";
import { IPokemon, IPokemonNameListResponse, IPokemonRequestResponse, IPokemonState } from "./types";

export const functionReducerPokemonListRequest = (state: IPokemonState, action: AnyAction): IPokemonState => {
    return {
        ...state,
        isLoading: true
    }
}

export const functionReducerPokemonListSuccess = (state: IPokemonState, action: AnyAction): IPokemonState => {
    let requestResult: IPokemonRequestResponse = action.response;

    let newData = state.data;

    requestResult.results.forEach(pokemon => {
        let [selectedPokemon] = state.data.filter(pkm => pkm.name === pokemon.name);

        if(!selectedPokemon) newData.push({
            name: pokemon.name,
            isLoading: false
        })
    })

    return {
        ...state,
        isLoading: false,
        nextRequest: requestResult.next,
        data: newData
    }
}