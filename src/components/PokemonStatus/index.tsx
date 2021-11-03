import React from 'react';
import { connect } from 'react-redux';
import { IPokemon } from '../../store/pokemon/types';
import { IApplicationState } from '../../store/types';
import ListInfo from '../ListInfo';
import { Container } from './styles';

interface Props {
    pokemon?: IPokemon;
}

const PokemonStatus: React.FC<Props> = ({pokemon}) => {
    return <Container>
        {pokemon?.stats?.map(stat => <ListInfo key={`stat-item-${stat.stat.name}`} title={stat.stat.name} description={String(stat.base_stat)} />)}
    </Container>;
}

interface InitialProps {
    pokemonName?: string;
}
const mapStateToProps = (state:IApplicationState, props: InitialProps) => ({
    pokemon: state.pokemon.data.find(poke => poke.name === props.pokemonName)
})

export default connect(mapStateToProps)(PokemonStatus);