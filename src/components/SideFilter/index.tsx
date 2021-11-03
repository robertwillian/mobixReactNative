import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import closeIcon from '../../assets/images/close_icon.png'
import { actionFilterClear, actionFilterSetTypes, actionFilterTogglePannel } from '../../store/filters/actions';

import { Container, FilterClear, FilterClearText, FilterClose, FilterCloseIcon, FilterSubTitle, FilterTitle, FilterTypeListItem, FilterTypesList, Header } from './styles';

const SideFilter: React.FC = () => {
    const dispatch = useDispatch()

    const typesList = [
        {id: "all", name:"Todos"},
        {id: "water", name:"Água"},
        {id: "fire", name:"Fogo"},
        {id: "grass", name:"Planta"},
        {id: "fairy", name:"Fada"},
        {id: "ghost", name:"Fantasma"},
        {id: "ice", name:"Gelo"},
        {id: "electric", name:"Elétrico"},
        {id: "fighting", name:"Lutador"},
        {id: "flying", name:"Voador"},
        {id: "poison", name:"Venenoso"},
        {id: "ground", name:"Terra"},
        {id: "rock", name:"Pedra"},
        {id: "bug", name:"Inseto"},
        {id: "steel", name:"Metal"},
        {id: "psychic", name:"Psíquico"},
        {id: "dragon", name:"Dragão"},
        {id: "dark", name:"Sombrio"},
        {id: "unknown", name:"Desconhecido"},
        {id: "shadow", name:"Sombroso"},
        {id: "normal", name:"Normal"}
    ]

    const [pokemonTypes, setPokemonTypes] = useState<string[]>([])

    return <Container>
        <Header>
            <FilterTitle>Filtro</FilterTitle>

            <FilterClear  onPress={() => {
                    dispatch(actionFilterClear())
                    setPokemonTypes([]);
                }}>
                <FilterClearText>Limpar Filtros</FilterClearText>
            </FilterClear>

            <FilterClose onPress={() => dispatch(actionFilterTogglePannel())}>
                <FilterCloseIcon source={closeIcon} />
            </FilterClose>
        </Header>

        <FilterSubTitle>Tipo</FilterSubTitle>

        <FilterTypesList
            data={typesList}
            keyExtractor={item => item.id}
            renderItem={item => <FilterTypeListItem onPress={() => {
                if(item.item.id === "all") return setPokemonTypes([]);

                if(pokemonTypes.includes(item.item.id)) {
                    return setPokemonTypes(pokemonTypes.filter(type => type !== item.item.id))
                }

                setPokemonTypes([...pokemonTypes, item.item.id])
            }}>
                <Button mode={'contained'} uppercase={false} disabled={!(pokemonTypes.includes(item.item.id) || (pokemonTypes.length === 0 && item.item.id === 'all'))}>{item.item.name}</Button>
            </FilterTypeListItem>}
            numColumns={2}

            />
        
        <Button 
            mode={'contained'} 
            uppercase={false}
            onPress={() => dispatch(actionFilterSetTypes(pokemonTypes))}
            >Aplicar</Button>
  </Container>;
}

export default SideFilter;