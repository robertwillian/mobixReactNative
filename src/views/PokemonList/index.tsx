import React, { useEffect } from 'react';
import { Chip, Title } from 'react-native-paper';
import { connect, useDispatch } from 'react-redux';
import logo from '../../assets/images/pokemon.png';
import ActiveFilters from '../../components/ActiveFilters';
import PokemonGrid from '../../components/PokemonGrid';
import PokemonListFilter from '../../components/PokemonListFilter';
import SideFilter from '../../components/SideFilter';
import { IFilterState } from '../../store/filters/types';
import { actionPokemonRequest } from '../../store/pokemon/actions';
import { IApplicationState } from '../../store/types';

import { Container, Logo } from './styles';

interface Props{
    filter: IFilterState
}

const PokemonList: React.FC<Props> = ({filter}) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actionPokemonRequest())
    }, [])

    return <Container>
        <Logo source={logo} />
        <PokemonListFilter />

        <ActiveFilters />        

        <PokemonGrid />

        {filter.pannelOpen && <SideFilter />}
    </Container>;
}

const mapStateToProps = (state: IApplicationState) => ({
    filter: state.filter
})
export default connect(mapStateToProps)(PokemonList);
