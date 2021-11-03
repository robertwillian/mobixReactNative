import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { IPokemonState } from '../../store/pokemon/types';
import { IApplicationState } from '../../store/types';
import PokemonListItem from '../PokemonListItem';
import { List } from './styles';

interface Props {
    pokemon: IPokemonState
}
const PokemonGrid: React.FC<Props> = ({pokemon}) => {
    return <List
        data={pokemon.data}
        keyExtractor={(item) => item.name}
        renderItem={item => <PokemonListItem pokemon={item.item} />}
        numColumns={2}
    />;
}

const mapsStateToProps = (state: IApplicationState) => ({
    pokemon: state.pokemon
})

export default connect(mapsStateToProps)(PokemonGrid);