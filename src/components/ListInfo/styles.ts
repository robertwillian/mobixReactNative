import styled from 'styled-components/native';
import {Text, Title} from 'react-native-paper'

export const Container = styled.View`
    display: flex;
    padding: 9px 0;
    flex-direction: row;
    align-items: center;
`;

export const TitleLeft = styled(Title)`
    font-family: "Spartan-Bold";
    font-size: 16px;
    width: 150px;
    color: #9A9A9A;
`;

export const Value = styled(Text)`
    font-size: 13px;
    color: #5E5E5E;
`;
