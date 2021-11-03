import { Title } from "react-native-paper";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex: 0.5;
    height: 124px;
`;

export const Badge = styled(LinearGradient).attrs({
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 }
})`
    display: flex;
    flex: 1;
    /* background-color: #CCC; */
    margin: 8px;
    margin-top: 28px;
    justify-content: flex-end;
    border-radius: 20px;
`;

export const PokemonSprite = styled.Image`
    width: 80px;
    height: 80px;
    margin-bottom: -8px;
    align-self: center;
`;

export const PokemonNameBadge = styled.View.attrs({
    shadowColor: '#000',
    elevation: 10
})`
    background-color: #676767;
    height: 28px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 12px;
    box-shadow: 10px 5px 5px black;
`;

export const PokemonName = styled(Title)`
    text-transform: capitalize;
    color: #FFF;
    align-self: center;
    font-size: 14px;
    font-family: "Spartan-Bold";
`;