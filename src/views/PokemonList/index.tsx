import React from 'react';
import logo from '../../assets/images/pokemon.png';

import { Container, Logo } from './styles';

const PokemonList: React.FC = () => {
  return <Container>
      <Logo source={logo} />

  </Container>;
};

export default PokemonList;
