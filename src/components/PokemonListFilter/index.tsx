import React from 'react';
import { Container, FilterTextInput, FilterToggleButton } from './styles';
import settingsIcon from '../../assets/images/settings_icon.png';
import { Image } from 'react-native';
import {useDispatch} from 'react-redux'
import { actionPokemonRequest } from '../../store/pokemon/actions';

const PokemonListFilter: React.FC = () => {
    const dispatch = useDispatch();

    return <Container>
        <FilterTextInput placeholder={'Buscar Pokémon'} />

        <FilterToggleButton onPress={() => {
            // AsyncStorage.clear();
            dispatch(actionPokemonRequest())
        }}>
            <Image source={settingsIcon} />
        </FilterToggleButton>
    </Container>;
}

export default PokemonListFilter;