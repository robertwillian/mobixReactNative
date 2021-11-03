import React from 'react';
import { Container, FilterTextInput, FilterToggleButton } from './styles';
import settingsIcon from '../../assets/images/settings_icon.png';
import { Image } from 'react-native';
import {connect, useDispatch} from 'react-redux'
import { actionPokemonRequest } from '../../store/pokemon/actions';
import { IApplicationState } from '../../store/types';
import { IFilterState } from '../../store/filters/types';
import { actionFilterChangeText, actionFilterTogglePannel } from '../../store/filters/actions';


interface Props{
    filter: IFilterState
}

const PokemonListFilter: React.FC<Props> = ({filter}) => {
    const dispatch = useDispatch();

    return <Container>
        <FilterTextInput 
            placeholder={'Buscar Pokémon'} 
            value={filter.text}
            onChangeText={text => dispatch(actionFilterChangeText(text))}
              />

        <FilterToggleButton onPress={() => {
            dispatch(actionFilterTogglePannel())
        }}>
            <Image source={settingsIcon} />
        </FilterToggleButton>
    </Container>;
}


const mapStateToProps = (state: IApplicationState) => ({
    filter: state.filter
})
export default connect(mapStateToProps)(PokemonListFilter);