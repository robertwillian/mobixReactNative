import { FlatList } from 'react-native';
import styled from 'styled-components/native';


export const List = (styled.FlatList.attrs({
    contentContainerStyle: {
        paddingRight: 18,
        paddingLeft: 18
    }
})`
    flex: 1;
    display: flex;
` as unknown) as typeof FlatList;