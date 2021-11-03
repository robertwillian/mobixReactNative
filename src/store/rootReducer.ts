import { combineReducers, Reducer } from "redux";
import authenticationReducer, { AUTHENTICATION_INITIAL_STATE } from "./authentication";
import filterReducer, { FILTER_INITIAL_STATE } from "./filters";
import pokemonReducer, { POKEMON_INITIAL_STATE } from "./pokemon";
import { IApplicationState } from "./types";

const defaultState: IApplicationState = {
    pokemon: POKEMON_INITIAL_STATE,
    filter: FILTER_INITIAL_STATE, 
    authentication: AUTHENTICATION_INITIAL_STATE
}

const appReducer = combineReducers({
    pokemon: pokemonReducer,
    filter: filterReducer,
    authentication: authenticationReducer
})

const rootReducer: Reducer<IApplicationState> = (state = defaultState, action) => {
    // TO-DO reset application state at logout


    return appReducer(state, action);
}

export default rootReducer;