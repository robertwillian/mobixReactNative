export enum AuthenticationActionTypes {
    AUTHENTICATION_REQUEST = "authentication/REQUEST",
    AUTHENTICATION_SUCCESS = "authentication/SUCCESS",
    AUTHENTICATION_FAILURE = "authentication/FAILURE",

    AUTHENTICATION_CHECK_AUTHENTICATION = "authentication/CHECK_AUTHENTICATION"
}


export interface IAuthenticationState {
    token?: string;
    error?: ISystemErrors
}