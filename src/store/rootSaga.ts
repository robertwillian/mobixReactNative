import { all } from "@redux-saga/core/effects";
import pokemonSaga from './pokemon/sagas'

const rootSaga = all([
    pokemonSaga
])

export default function* rootsaga() {
    yield rootSaga
};