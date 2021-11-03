import { Text, Title } from 'react-native-paper';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: #FFF;
`;

export const BackNavigation = styled.TouchableOpacity`
    padding: 25px;
    width: 74px;
`;

export const BackIcon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle:{
        flex: 1,
        padding: 25,
        paddingTop: 0
    }
})`
    display: flex;
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    height: 30px;
    justify-content: center;
`;

export const PokemonName = styled(Title)`
    font-family: "Spartan-Bold";
    font-size: 24px;
    flex: 1;
    text-transform: capitalize;
`;

export const PokemonNumber = styled(Title)`
    font-family: "Spartan-Bold";
    font-size: 16px;
`;

export const PokemonTypesWrapper = styled.View`
    flex-direction: row;
    margin: 18px 0;
`;

export const PokemonType = styled.View`
    height: 26px;
    padding: 0px 18px;
    border-radius: 13px;
    background-color: #CCC;
    align-items: center;
    justify-content: center;
    margin-right: 11px;
`;

export const PokemonTypeText = styled(Text)`
    font-family: "Spartan-Regular";
    font-size: 14px;
    color: #FFFFFF;
    text-transform: capitalize;
`;

export const PokemonSpriteContainer = styled.View`
    height: 250px;
    margin-bottom: 18px;
`;

export const PokemonBackground = styled(LinearGradient).attrs({
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 }
})`
    display: flex;
    width: 100%;
    flex: 1;
    border-radius: 20px;
    margin-top: 72px;
    padding-bottom: 18px;
    background-color: #CCC;
    justify-content: flex-end;
    align-items: center;
`;

export const PokemonSprite = styled.Image`
    width: 250px;
    height: 250px;
`;