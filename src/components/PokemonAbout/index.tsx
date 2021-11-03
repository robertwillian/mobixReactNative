import React from 'react';
import { connect } from 'react-redux';
import { IPokemon } from '../../store/pokemon/types';
import { IApplicationState } from '../../store/types';
import ListInfo from '../ListInfo';
import { Container } from './styles';

interface Props {
    pokemon?: IPokemon;
}

const PokemonAbout: React.FC<Props> = ({pokemon}) => {
    return <Container>
        <ListInfo title={'Espécie'} description={'-'} />
        <ListInfo title={'Tamanho'} description={String((pokemon?.height || 0) /10)+'m'} />
        <ListInfo title={'Peso'} description={String((pokemon?.weight || 0) /10)+'Kg'} />
        <ListInfo title={'Habilidades'} description={pokemon?.abilities?.map(ability => ability.ability.name).join(', ') || '-'} />
        <ListInfo title={'Gênero'} description={'-'} />   
    </Container>;
}

interface InitialProps {
    pokemonName?: string;
}
const mapStateToProps = (state:IApplicationState, props: InitialProps) => ({
    pokemon: state.pokemon.data.find(poke => poke.name === props.pokemonName)
})

export default connect(mapStateToProps)(PokemonAbout);