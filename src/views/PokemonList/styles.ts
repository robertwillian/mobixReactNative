import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: #FFF;
`;

export const Logo = styled.Image`
    height: 41px;
    width: 117px;
    align-self: center;
    margin: 18px 0px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;

`;

export const FilterWrapper = styled.View`
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
    height: 100%;
    flex: 1;
    background-color: #FFF;
    padding: 18px;
`;