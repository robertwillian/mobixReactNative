import React from 'react';
import { Chip } from 'react-native-paper';
import logo from '../../assets/images/pokemon.png';
import PokemonGrid from '../../components/PokemonGrid';
import PokemonListFilter from '../../components/PokemonListFilter';

import { Container, Logo } from './styles';

const PokemonList: React.FC = () => {
    return <Container>
        <Logo source={logo} />
        <PokemonListFilter />

        <Chip>Teste </Chip>

        <PokemonGrid />
    </Container>;
}

export default PokemonList;
