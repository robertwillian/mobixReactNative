import { all } from "@redux-saga/core/effects";
import pokemonSaga from './pokemon/sagas'
import authenticationSaga from './authentication/sagas'

const rootSaga = all([
    pokemonSaga,
    authenticationSaga
])

export default function* rootsaga() {
    yield rootSaga
};