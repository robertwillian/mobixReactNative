import { AnyAction } from "redux";
import { IPokemon, IPokemonDetailResponse, IPokemonNameListResponse, IPokemonRequestResponse, IPokemonState } from "./types";

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

export const functionReducerPokemonDetailRequest = (state: IPokemonState, action: AnyAction): IPokemonState => {
    const name = action.name;

    const newData = state.data.map(pokemon => {
        if(pokemon.name !== name) return pokemon;

        return{
            ...pokemon,
            isLoading: true
        }
    })

    return {
        ...state,
        data: newData
    }
}

export const functionReducerPokemonDetailSuccess = (state: IPokemonState, action: AnyAction): IPokemonState => {
    const requestResult: IPokemonDetailResponse = action.response;

    let newData = state.data.map(pokemon => {
        if(pokemon.name !== requestResult.name) return pokemon;

        return {
            ...pokemon,
            isLoading: false,
            sprite: requestResult.sprites.other?.home?.front_default || requestResult.sprites.front_default,
            id: requestResult.id,
            types: requestResult.types,
            stats: requestResult.stats,
            height: requestResult.height,
            weight: requestResult.weight
        }
    });

    return {
        ...state,
        data: newData
    }
}