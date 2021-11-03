import React from 'react';
import { Title } from 'react-native-paper';
import { Container } from './styles';

interface Props {
    pokemon: string;
}
const PokemonEvolution: React.FC<Props> = ({ pokemon }) => {
    return <Container>
        <Title>Em desenvolvimento</Title>
    </Container>;
}

export default PokemonEvolution;