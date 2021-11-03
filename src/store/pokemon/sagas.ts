import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import {takeEvery, all, put} from 'redux-saga/effects'
import { actionPokemonSuccess } from './actions';

import { serviceRequestPokemonList } from "./services";
import { IPokemonRequestResponse, PokemonActionTypes } from './types';

function* sagaPokemonRequest(action: AnyAction) {
    try {
        const response: IPokemonRequestResponse = yield serviceRequestPokemonList(action.url)

        yield put(actionPokemonSuccess(response));
    }
    catch(error) {
        console.log('check 2', error);
        
    }
}

function* wathcSagaPokemonListRequest() {
    yield takeEvery(PokemonActionTypes.POKEMON_REQUEST, sagaPokemonRequest)
}

export default all([
    wathcSagaPokemonListRequest()
])