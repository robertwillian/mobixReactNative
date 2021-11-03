import React, { useMemo } from 'react';
import { ListRenderItem, Text, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { IFilterState } from '../../store/filters/types';
import { actionPokemonRequest } from '../../store/pokemon/actions';
import { IPokemon, IPokemonState } from '../../store/pokemon/types';
import { IApplicationState } from '../../store/types';
import PokemonListItem from '../PokemonListItem';
import { List } from './styles';

interface Props {
    pokemon: IPokemonState,
    filter: IFilterState
}
const PokemonGrid: React.FC<Props> = ({pokemon, filter}) => {
    const dispatch = useDispatch()

    // filter by text
    let filteredPokemon = pokemon.data.filter(item => {
        if(!filter.text && filter.types.length === 0) return true;

        if(item.name.toLocaleLowerCase().includes(filter.text?.toLocaleLowerCase() || "")) return true;

        return false
    })

    // filter by type
    filteredPokemon = filteredPokemon.filter(item => {
        if(filter.types.length === 0) return true;

        let isToReturn = false;
        item.types?.forEach(pokemonType => {
            if(filter.types.includes(pokemonType.type.name)) {
                isToReturn = true;
            }
        })

        return isToReturn;
    })

    return <List
    removeClippedSubviews
        data={filteredPokemon}
        keyExtractor={(item) => item.name}
        renderItem={item => <PokemonListItem pokemon={item.item} />}
        numColumns={2}
        initialNumToRender={10}
        onEndReached={() => {
            if(!pokemon.isLoading)
            dispatch(actionPokemonRequest(pokemon.nextRequest || undefined))
        }}
    />;
}

const mapsStateToProps = (state: IApplicationState) => ({
    pokemon: state.pokemon,
    filter: state.filter
})

export default connect(mapsStateToProps)(PokemonGrid);