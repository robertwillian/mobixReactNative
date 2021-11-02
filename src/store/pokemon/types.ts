export interface IPokemonState {
    isLoading: boolean;
    error?: ISystemErrors;
    data: IPokemon[];

}

export interface IPokemon {
    isLoading: boolean;
    error?: ISystemErrors;
    name: string;
    id?: number;
    sprite?: string;
    types?: string[];
}