import { Reducer } from "redux";
import { AuthenticationActionTypes, IAuthenticationState } from "./types";

export const AUTHENTICATION_INITIAL_STATE: IAuthenticationState = {
    token: undefined
}

const reducer: Reducer<IAuthenticationState> = (state = AUTHENTICATION_INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthenticationActionTypes.AUTHENTICATION_REQUEST:
            return {
                ...state,
                token: undefined,
                error: undefined
            }
        
        case AuthenticationActionTypes.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                token: action.token,
                error: undefined
            }

        case AuthenticationActionTypes.AUTHENTICATION_FAILURE:
            return {
                ...state,
                error: action.error
            }
  
        default:
            return state;
    }
}

export default reducer;