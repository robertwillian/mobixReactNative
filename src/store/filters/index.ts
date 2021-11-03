import { Reducer } from "redux";
import { FilterActionTypes, IFilterState } from "./types";

export const FILTER_INITIAL_STATE: IFilterState = {
    types: [],
    pannelOpen: false
}

const reducer: Reducer<IFilterState> = (state = FILTER_INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.FILTER_TEXT_CHANGE:
            return {
                ...state,
                text: action.text
            }

        case FilterActionTypes.FILTER_TOGGLE_TYPE:
            if(state.types.includes(action.toggleType)) {
                return {
                    ...state,
                    types: state.types.filter(type => type !== action.toggleType)
                }
            }

            return {
                ...state,
                types: [...state.types, action.toggleType]
            }
    
        case FilterActionTypes.FILTER_SET_TYPES:
            return {
                ...state,
                types: action.types,
                pannelOpen: false
            }

        case FilterActionTypes.FILTER_CLEAR:
            return {
                ...state,
                types: [],
                text: undefined,
                pannelOpen: false
            }

        case FilterActionTypes.FILTER_TOGGLE_PANNEL:
            return {
                ...state,
                pannelOpen: !state.pannelOpen
            }
        default:
            return state;
    }
}

export default reducer;