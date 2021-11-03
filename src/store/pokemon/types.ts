export enum PokemonActionTypes {
    POKEMON_REQUEST = "pokemon/REQUEST",
    POKEMON_SUCCESS = "pokemon/SUCCESS",
    POKEMON_FAILURE = "pokemon/FAILURE",

    POKEMON_DETAIL_REQUEST = "pokemon/DETAIL_REQUEST",
    POKEMON_DETAIL_SUCCESS = "pokemon/DETAIL_SUCCESS",
    POKEMON_DETAIL_FAILURE = "pokemon/DETAIL_FAILURE",
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
    types?: IPokemonTypes[];
    stats?: IPokemonStats[];
    abilities?: IPokemonAbilities[];
    height?: number;
    weight?: number;
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

export interface IPokemonDetailResponse{
    height: number;
    weight: number;
    id: number;
    name: string;
    sprites: {
        front_default: string;
        other?: {
            home?: {
                front_default: string|null;
            }
        }
    },
    stats: IPokemonStats[],
    types: IPokemonTypes[],
    abilities: IPokemonAbilities[],
}

export interface IPokemonStats {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export interface IPokemonTypes {
    slot: number
    type: {
        name: string,
        url: string
    }
}
export interface IPokemonAbilities {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}