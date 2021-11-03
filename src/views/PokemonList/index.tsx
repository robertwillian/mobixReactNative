import React from 'react';
import { Chip, Title } from 'react-native-paper';
import { connect } from 'react-redux';
import logo from '../../assets/images/pokemon.png';
import PokemonGrid from '../../components/PokemonGrid';
import PokemonListFilter from '../../components/PokemonListFilter';
import SideFilter from '../../components/SideFilter';
import { IFilterState } from '../../store/filters/types';
import { IApplicationState } from '../../store/types';

import { Container, Logo } from './styles';

interface Props{
    filter: IFilterState
}

const PokemonList: React.FC<Props> = ({filter}) => {
    return <Container>
        
        <Logo source={logo} />
        <PokemonListFilter />

        <Chip>Teste </Chip>

        <PokemonGrid />

        {filter.pannelOpen && <SideFilter />}
    </Container>;
}

const mapStateToProps = (state: IApplicationState) => ({
    filter: state.filter
})
export default connect(mapStateToProps)(PokemonList);
