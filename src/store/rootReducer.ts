import { combineReducers, Reducer } from "redux";
import filterReducer, { FILTER_INITIAL_STATE } from "./filters";
import pokemonReducer, { POKEMON_INITIAL_STATE } from "./pokemon";
import { IApplicationState } from "./types";

const defaultState: IApplicationState = {
    pokemon: POKEMON_INITIAL_STATE,
    filter: FILTER_INITIAL_STATE
}

const appReducer = combineReducers({
    pokemon: pokemonReducer,
    filter: filterReducer
})

const rootReducer: Reducer<IApplicationState> = (state = defaultState, action) => {
    // TO-DO reset application state at logout


    return appReducer(state, action);
}

export default rootReducer;