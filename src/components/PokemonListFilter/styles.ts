import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
    margin-top: 6px;
    align-content: center;
`;

export const FilterTextInput = styled.TextInput.attrs({
    placeholderTextColor: "#838282"
})`
    margin-left: 25px;
    height: 46px;
    background-color: #E5E5E5;
    border-radius: 23px;
    color: #838282;
    align-content: center;
    text-align: center;
    flex: 1;
    font-family: "Spartan-Regular";
    font-size: 14px;
`;

export const FilterToggleButton = styled.TouchableOpacity`
    justify-content: center;;
    height: 46px;
    padding: 0px 25px;
`;