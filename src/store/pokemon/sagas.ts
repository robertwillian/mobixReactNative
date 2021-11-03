import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import {takeEvery, all, put} from 'redux-saga/effects'
import { actionPokemonDetailSuccess, actionPokemonSuccess } from './actions';

import { serviceRequestPokemonDetail, serviceRequestPokemonList } from "./services";
import { IPokemonDetailResponse, IPokemonRequestResponse, PokemonActionTypes } from './types';

// Pokemon List
function* sagaPokemonRequest(action: AnyAction) {
    try {
        const response: IPokemonRequestResponse = yield serviceRequestPokemonList(action.url)

        yield put(actionPokemonSuccess(response));
    }
    catch(error) {
    }
}

function* wathcSagaPokemonListRequest() {
    yield takeEvery(PokemonActionTypes.POKEMON_REQUEST, sagaPokemonRequest)
}

// Pokemon details
function* sagaPokemonDetailRequest(action: AnyAction) {
    try {
        const response: IPokemonDetailResponse = yield serviceRequestPokemonDetail(action.name)

        yield put(actionPokemonDetailSuccess(response));
    }
    catch(error) {
        
    }
}

function* wathcSagaPokemonDetailRequest() {
    yield takeEvery(PokemonActionTypes.POKEMON_DETAIL_REQUEST, sagaPokemonDetailRequest)
}

export default all([
    wathcSagaPokemonListRequest(),
    wathcSagaPokemonDetailRequest()
])