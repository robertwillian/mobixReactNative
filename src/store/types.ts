import { IFilterState } from "./filters/types";
import { IPokemonState } from "./pokemon/types";

export interface IApplicationState {
    pokemon: IPokemonState,
    filter: IFilterState
}