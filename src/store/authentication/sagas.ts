import { AnyAction } from 'redux';
import {takeEvery, all, put} from 'redux-saga/effects'
import { loadCache, saveCache } from '../../providers/cache';
import { NavigationRef } from '../../providers/NavigationRef';
import { actionAuthenticationFailure, actionAuthenticationSuccess } from './actions';
import { AuthenticationActionTypes } from './types';


function* sagaAuthenticationRequest(action: AnyAction) {
    const {username, password} = action;

    if(username === "teste@email.com" && password === "senha") {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MzU5NTYyNTEsImV4cCI6MTY2NzQ5MjI1MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.RyRR9Os3L30i267HTC34eBEZ01XQ8oWLkQtYCXPBVhQ";

        saveCache('user/token', token);

        NavigationRef.navigate("PokemonList");

        yield put(actionAuthenticationSuccess(token))
    }

    else {
        yield put(actionAuthenticationFailure({
            message: "E-mail ou senha incorretos"
        }))
    }
}

function* watchSagaAuthenticationRequest() {
    yield takeEvery(AuthenticationActionTypes.AUTHENTICATION_REQUEST, sagaAuthenticationRequest)
}


function* sagaCheckAuthenticationRequest(action: AnyAction) {
    const {username, password} = action;

    let token: string = yield loadCache('user/token'); 

    if(token !== null && token !== undefined) {
        NavigationRef.navigate("PokemonList");
        
        yield put(actionAuthenticationSuccess(token))
    }
}

function* watchSagaCheckAuthenticationRequest() {
    yield takeEvery(AuthenticationActionTypes.AUTHENTICATION_CHECK_AUTHENTICATION, sagaCheckAuthenticationRequest)
}

export default all([
    watchSagaAuthenticationRequest(),
    watchSagaCheckAuthenticationRequest()
])