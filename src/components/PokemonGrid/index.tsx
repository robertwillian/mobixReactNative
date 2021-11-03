import React from 'react';
import { Text, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { actionPokemonRequest } from '../../store/pokemon/actions';
import { IPokemonState } from '../../store/pokemon/types';
import { IApplicationState } from '../../store/types';
import PokemonListItem from '../PokemonListItem';
import { List } from './styles';

interface Props {
    pokemon: IPokemonState
}
const PokemonGrid: React.FC<Props> = ({pokemon}) => {
    const dispatch = useDispatch()

    return <List
        data={pokemon.data}
        keyExtractor={(item) => item.name}
        renderItem={item => <PokemonListItem pokemon={item.item} />}
        numColumns={2}
        onEndReached={() => {
            dispatch(actionPokemonRequest(pokemon.nextRequest || undefined))
        }}
    />;
}

const mapsStateToProps = (state: IApplicationState) => ({
    pokemon: state.pokemon
})

export default connect(mapsStateToProps)(PokemonGrid);