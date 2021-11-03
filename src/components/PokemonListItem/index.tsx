import React from 'react';
import { Title } from 'react-native-paper';
import { IPokemon } from '../../store/pokemon/types';

import { Container, PokemonNameBadge, Badge, PokemonName } from './styles';

interface Props {
    pokemon?: IPokemon;
}

const PokemonListItem: React.FC<Props> = ({pokemon}) => {
  return <Container>
      <Badge>
          <PokemonNameBadge>
            <PokemonName numberOfLines={1}>{pokemon?.name}</PokemonName>
          </PokemonNameBadge>
      </Badge>
  </Container>;
}

export default PokemonListItem;