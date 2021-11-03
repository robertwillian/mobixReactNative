import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Image, Text } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { actionPokemonDetailRequest } from '../../store/pokemon/actions';
import { IPokemon } from '../../store/pokemon/types';

import { Container, PokemonNameBadge, Badge, PokemonName, PokemonSprite } from './styles';

interface Props {
    pokemon: IPokemon;
}

const PokemonListItem: React.FC<Props> = ({ pokemon }) => {
    const dispatch = useDispatch()

    const navigation = useNavigation();

    useEffect(() => {
        dispatch(actionPokemonDetailRequest(pokemon.name))
    }, [])

    return <Container onPress={() => {
        navigation.navigate('PokemonDetails', {name: pokemon.name})
    }}>
        <Badge>
            {!pokemon.isLoading && pokemon.sprite && <PokemonSprite source={{uri: pokemon.sprite}} />}
            {pokemon.isLoading && <ActivityIndicator />}
            <PokemonNameBadge>
                <PokemonName numberOfLines={1}>{pokemon.name}</PokemonName>
            </PokemonNameBadge>
        </Badge>
    </Container>;
}

export default PokemonListItem;