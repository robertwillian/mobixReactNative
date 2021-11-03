import { Chip, Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 60px;
    justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle:{
        paddingHorizontal: 25,
        height: 35
    }
})`
    margin-bottom: 18px;
    height: 30px;
`;

export const ChipTag = styled.View`
    background-color: rgba(0,0,0,.08);
    color: #000;
    margin-right: 10px;
    height: 32px;
    border-radius: 16px;
    flex-direction: row;
    padding: 0 12px;
    padding-right: 8px;
    align-items: center;
`
export const ChipText = styled(Text)`
    color: #000;
    font-size: 14px;
    margin-right: 8px;
`;

export const CloseChipIcon = styled.Image`
    width: 16px;
    height: 16px;
`;