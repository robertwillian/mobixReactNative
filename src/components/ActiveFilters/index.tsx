import React from 'react';
import { Chip } from 'react-native-paper';
import { connect, useDispatch } from 'react-redux';
import { IFilterState } from '../../store/filters/types';
import { IApplicationState } from '../../store/types';
import closeChipIcon from '../../assets/images/close_chip.png'

import { ChipTag, ChipText, CloseChipIcon, Container, Scroll } from './styles';
import { actionFilterToggleType } from '../../store/filters/actions';
import { TouchableOpacity } from 'react-native';

const typesList = [
    { id: "all", name: "Todos" },
    { id: "water", name: "Água" },
    { id: "fire", name: "Fogo" },
    { id: "grass", name: "Planta" },
    { id: "fairy", name: "Fada" },
    { id: "ghost", name: "Fantasma" },
    { id: "ice", name: "Gelo" },
    { id: "electric", name: "Elétrico" },
    { id: "fighting", name: "Lutador" },
    { id: "flying", name: "Voador" },
    { id: "poison", name: "Venenoso" },
    { id: "ground", name: "Terra" },
    { id: "rock", name: "Pedra" },
    { id: "bug", name: "Inseto" },
    { id: "steel", name: "Metal" },
    { id: "psychic", name: "Psíquico" },
    { id: "dragon", name: "Dragão" },
    { id: "dark", name: "Sombrio" },
    { id: "unknown", name: "Desconhecido" },
    { id: "shadow", name: "Sombroso" },
    { id: "normal", name: "Normal" }
]

interface Props {
    filter: IFilterState
}

const ActiveFilters: React.FC<Props> = ({ filter }) => {
    const dispatch = useDispatch();

    return <Container>
        <Scroll>
            {filter.types.length === 0 && <ChipTag>
                    <ChipText>Todos</ChipText>
                </ChipTag>}

            {filter.types.map(type => <TouchableOpacity key={`filter-${type}`} onPress={() => dispatch(actionFilterToggleType(type))}>
                <ChipTag>
                    <ChipText>{typesList.find(item => item.id === type)?.name || "Desconhecido"}</ChipText>
                    <CloseChipIcon source={closeChipIcon} />
                </ChipTag>
            </TouchableOpacity>)}
        </Scroll>
    </Container>;
}

const mapStateToProps = (state: IApplicationState) => ({
    filter: state.filter
})
export default connect(mapStateToProps)(ActiveFilters);