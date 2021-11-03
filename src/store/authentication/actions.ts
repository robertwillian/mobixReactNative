import { AuthenticationActionTypes } from "./types";

export const actionAuthenticationRequest = (username: string, password: string) => ({
    type: AuthenticationActionTypes.AUTHENTICATION_REQUEST,
    username, password
})

export const actionAuthenticationSuccess = (token: string) => ({
    type: AuthenticationActionTypes.AUTHENTICATION_SUCCESS,
    token
})

export const actionAuthenticationFailure = (error: ISystemErrors) => ({
    type: AuthenticationActionTypes.AUTHENTICATION_FAILURE,
    error
})

export const actionCheckAuthenticationRequest = () => ({
    type: AuthenticationActionTypes.AUTHENTICATION_CHECK_AUTHENTICATION
})