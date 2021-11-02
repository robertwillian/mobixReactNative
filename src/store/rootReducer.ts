import { combineReducers, Reducer } from "redux";
import pokemonReducer, { POKEMON_INITIAL_STATE } from "./pokemon";
import { IApplicationState } from "./types";

const defaultState: IApplicationState = {
    pokemon: POKEMON_INITIAL_STATE
}

const appReducer = combineReducers({
    pokemon: pokemonReducer
})

const rootReducer: Reducer<IApplicationState> = (state = defaultState, action) => {
    // TO-DO reset application state at logout


    return appReducer(state, action);
}

export default rootReducer;