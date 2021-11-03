import { AxiosResponse } from "axios";
import { IPokemonRequestResponse, PokemonActionTypes } from "./types";

export const actionPokemonRequest = (url?: string) => ({
    type: PokemonActionTypes.POKEMON_REQUEST,
    url
})

export const actionPokemonSuccess = (response: IPokemonRequestResponse) => ({
    type: PokemonActionTypes.POKEMON_SUCCESS,
    response
})

export const actionPokemonFailure = (error: ISystemErrors) => ({
    type: PokemonActionTypes.POKEMON_FAILURE,
    error
})