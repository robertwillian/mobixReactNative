import React from 'react';
import { AuthenticationBox, AuthenticationButton, AuthenticationCaption, AuthenticationTitle, Container, Logo, StyledTextInput } from './styles';
import backGroundImage from '../../assets/images/background.png';
import logo from '../../assets/images/pokemon.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IRootStackInterface } from '../../../App';

type Props = NativeStackScreenProps<IRootStackInterface, 'Authentication'>;

const Authentication: React.FC<Props> = ({navigation}) => {
    return <Container source={backGroundImage}>
        <Logo source={logo} />
        <AuthenticationBox>
            <AuthenticationTitle>Bem-vindo</AuthenticationTitle>
            <AuthenticationCaption>Insira ois seus dados para acessar</AuthenticationCaption>

            <StyledTextInput
                label="Email"
            />

            <StyledTextInput
                label="Senha"
                secureTextEntry
                right={<StyledTextInput.Icon name="eye" onPress={() => { }} />}
            />
            <AuthenticationButton 
                uppercase={false} 
                mode="contained"
                onPress={() => {
                    navigation.navigate('PokemonList');
                }}
                >Login</AuthenticationButton>
        </AuthenticationBox>
    </Container>

}

export default Authentication;