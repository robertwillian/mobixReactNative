import { Button, Caption, TextInput, Title } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
    contentStyle: {
        flex: 1
    }
})`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 18px;
`;

export const Logo = styled.Image`
    height: 88px;
    width: 252px;
    margin: 64px 0px;
`;


export const AuthenticationBox = styled.View`
    width: 100%;
    padding: 18px;
    background-color: #FFF;
    border-radius: 8px;
`;

export const AuthenticationTitle = styled(Title)`
    font-weight: 600;
    font-size: 24px;
`;

export const AuthenticationCaption = styled(Caption)`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 30px;
`;

export const StyledTextInput = styled(TextInput)`
    margin-bottom: 24px;
`;


export const AuthenticationButton = styled(Button).attrs({
    labelStyle: {
        fontFamily: "Spartan-Bold",
        fontSize: 16
    }
})`
    height: 56px;
    justify-content: center;
    margin-top: 18px;
    border-radius: 8px;
`;

export const AuthenticationErrorMessage = styled(Caption)`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 30px;
    color: #F00;
`;