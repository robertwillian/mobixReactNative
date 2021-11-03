import { AxiosResponse } from "axios";
import { IPokemonDetailResponse, IPokemonRequestResponse, PokemonActionTypes } from "./types";

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

export const actionPokemonDetailRequest = (name: string) => ({
    type: PokemonActionTypes.POKEMON_DETAIL_REQUEST,
    name
})

export const actionPokemonDetailSuccess = (response: IPokemonDetailResponse) => ({
    type: PokemonActionTypes.POKEMON_DETAIL_SUCCESS,
    response
})