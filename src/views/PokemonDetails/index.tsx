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

type DefaultProps = NativeStackScreenProps<IRootStackInterface, 'PokemonDetails'>;

interface Props extends DefaultProps {
    pokemon?: IPokemon
}
const PokemonDetails: React.FC<Props> = ({ pokemon, navigation }) => {
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
                {pokemon?.types?.map(type => <PokemonType key={`poke-type-${type.type.name}`}>
                    <PokemonTypeText>{type.type.name}</PokemonTypeText>
                </PokemonType>)}
            </PokemonTypesWrapper>

            <PokemonSpriteContainer>
                <PokemonBackground>
                    <PokemonSprite source={{uri: pokemon?.sprite}} />
                </PokemonBackground>
            </PokemonSpriteContainer>

        </Content>
    </Container>
}

const mapStateToProps = (state: IApplicationState, props: DefaultProps) => ({
    pokemon: state.pokemon.data.find(pokemon => pokemon.name === props.route.params.name)
})
export default connect(mapStateToProps)(PokemonDetails);