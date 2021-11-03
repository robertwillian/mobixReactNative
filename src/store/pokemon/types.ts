export enum PokemonActionTypes {
    POKEMON_REQUEST = "pokemon/REQUEST",
    POKEMON_SUCCESS = "pokemon/SUCCESS",
    POKEMON_FAILURE = "pokemon/FAILURE"
}

export interface IPokemonState {
    isLoading: boolean;
    error?: ISystemErrors;
    data: IPokemon[];
    nextRequest: string|null;
}

export interface IPokemon {
    isLoading: boolean;
    error?: ISystemErrors;
    name: string;
    id?: number;
    sprite?: string;
    types?: string[];
}

export interface IPokemonRequestResponse {
    count: number;
    next: string|null;
    previous: string|null;
    results: IPokemonNameListResponse[]
}

export interface IPokemonNameListResponse {
    name: string;
    url: string;
}