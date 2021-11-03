import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
import { Title } from 'react-native-paper';
import { connect } from 'react-redux';
import { IRootStackInterface } from '../../../App';
import { IPokemon } from '../../store/pokemon/types';
import { IApplicationState } from '../../store/types';
import { BackIcon, BackNavigation, Container, Content, Header, PokemonBackground, PokemonName, PokemonNumber, PokemonSprite, PokemonSpriteContainer, PokemonType, PokemonTypesWrapper, PokemonTypeText } from './styles';
import backIcon from '../../assets/images/back_icon.png';
import PokemonInfo from '../../components/PokemonInfo';
import { getColors } from '../../providers/colors';

type DefaultProps = NativeStackScreenProps<IRootStackInterface, 'PokemonDetails'>;

interface Props extends DefaultProps {
    pokemon?: IPokemon
}
const PokemonDetails: React.FC<Props> = ({ pokemon, navigation }) => {

    const type = pokemon?.types && pokemon.types?.length > 0 ? pokemon.types[0].type.name : "unknow";

    const colors = getColors(type);

    return <Container>
        <BackNavigation onPress={() => navigation.pop()}>
            <BackIcon width={24} height={24} source={backIcon} />
        </BackNavigation>
        <Content>
            <Header>
                <PokemonName>
                    {pokemon?.name}
                </PokemonName>

                <PokemonNumber>#{String(pokemon?.id).padStart(4, "0")}</PokemonNumber>
            </Header>

            <PokemonTypesWrapper>
                {pokemon?.types?.map(type => <PokemonType style={{backgroundColor: getColors(type.type.name)[0]}} key={`poke-type-${type.type.name}`}>
                    <PokemonTypeText style={{color: getColors(type.type.name)[2]}}>{type.type.name}</PokemonTypeText>
                </PokemonType>)}
            </PokemonTypesWrapper>

            <PokemonSpriteContainer>
                <PokemonBackground colors={[colors[0], colors[1]]} >
                    <PokemonSprite source={{uri: pokemon?.sprite}} />
                </PokemonBackground>
            </PokemonSpriteContainer>

            <PokemonInfo pokemon={pokemon?.name} tintColor={colors[0]} />
        </Content>
    </Container>
}

const mapStateToProps = (state: IApplicationState, props: DefaultProps) => ({
    pokemon: state.pokemon.data.find(pokemon => pokemon.name === props.route.params.name)
})
export default connect(mapStateToProps)(PokemonDetails);