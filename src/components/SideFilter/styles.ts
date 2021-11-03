import { FlatList } from 'react-native';
import { Subheading, Text, Title } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    shadowColor: "#000",
    elevation: 10
})`
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
    height: 100%;
    flex: 1;
    background-color: #FFF;
    padding: 18px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const FilterTitle = styled(Title)`
    font-family: "Spartan-Bold";
    font-size: 24px;
`;

export const FilterClear = styled.TouchableOpacity`
    margin-left: 18px;
`;

export const FilterClearText = styled(Text)`
    text-decoration: underline;
    color: #4A7DFF;
`;

export const FilterClose = styled.TouchableOpacity`
    padding: 11px;
    align-self: flex-end;
`;

export const FilterCloseIcon = styled.Image`
    width: 14px;
    height: 14px;
`;

export const FilterSubTitle = styled(Title)`
    font-size: 16px;
    font-family: "Spartan-Bold";
`;

export const FilterTypesList = (styled.FlatList.attrs({
    columnWrapperStyle:{justifyContent: 'space-between'}
})`
    flex: 1;
    /* background-color: #F00; */
    display: flex;
` as unknown) as typeof FlatList;

export const FilterTypeListItem = styled.TouchableOpacity`
    height: 45px;
    flex: 0.48;
`;