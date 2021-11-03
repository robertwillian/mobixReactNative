import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Image, Text } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { getColors } from '../../providers/colors';
import { actionPokemonDetailRequest } from '../../store/pokemon/actions';
import { IPokemon } from '../../store/pokemon/types';

import { Container, PokemonNameBadge, Badge, PokemonName, PokemonSprite } from './styles';

interface Props {
    pokemon: IPokemon;
}

const PokemonListItem: React.FC<Props> = ({ pokemon }) => {
    const dispatch = useDispatch()

    const navigation = useNavigation();

    const type = pokemon.types && pokemon.types?.length > 0 ? pokemon.types[0].type.name : "unknow";

    const colors = getColors(type);

    useEffect(() => {
        dispatch(actionPokemonDetailRequest(pokemon.name))
    }, [])

    return <Container onPress={() => {
        navigation.navigate('PokemonDetails', {name: pokemon.name})
    }}>
        <Badge colors={[colors[0], colors[1]]}>
            {!pokemon.isLoading && pokemon.sprite && <PokemonSprite source={{uri: pokemon.sprite}} />}
            {pokemon.isLoading && <ActivityIndicator />}
            <PokemonNameBadge>
                <PokemonName numberOfLines={1}>{pokemon.name}</PokemonName>
            </PokemonNameBadge>
        </Badge>
    </Container>;
}

export default PokemonListItem;