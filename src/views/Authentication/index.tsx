import React, { useEffect, useState } from 'react';
import { AuthenticationBox, AuthenticationButton, AuthenticationCaption, AuthenticationErrorMessage, AuthenticationTitle, Container, Logo, StyledTextInput } from './styles';
import backGroundImage from '../../assets/images/background.png';
import logo from '../../assets/images/pokemon.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IRootStackInterface } from '../../../App';
import { IAuthenticationState } from '../../store/authentication/types';
import { connect, useDispatch } from 'react-redux';
import { IApplicationState } from '../../store/types';
import { actionAuthenticationRequest, actionCheckAuthenticationRequest } from '../../store/authentication/actions';

type Props = NativeStackScreenProps<IRootStackInterface, 'Authentication'>;

interface ComponentProps extends Props {
    authentication: IAuthenticationState
}

const Authentication: React.FC<ComponentProps> = ({navigation, authentication}) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCheckAuthenticationRequest())
    }, [])

    return <Container source={backGroundImage}>
        <Logo source={logo} />
        <AuthenticationBox>
            <AuthenticationTitle>Bem-vindo</AuthenticationTitle>
            <AuthenticationCaption>Insira ois seus dados para acessar</AuthenticationCaption>

            <StyledTextInput
                label="Email"
                value={username}
                onChangeText={text => setUsername(text)}
            />

            <StyledTextInput
                label="Senha"
                secureTextEntry
                right={<StyledTextInput.Icon name="eye" onPress={() => { }} />}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            
            {authentication.error && <AuthenticationErrorMessage>{authentication.error.message}</AuthenticationErrorMessage>}

            <AuthenticationButton 
                uppercase={false} 
                mode="contained"
                onPress={() => {
                    dispatch(actionAuthenticationRequest(username, password));
                }}
                >Login</AuthenticationButton>
        </AuthenticationBox>
    </Container>

}
const mapStateToProps = (state: IApplicationState) => ({
    authentication: state.authentication
})

export default connect(mapStateToProps)(Authentication);