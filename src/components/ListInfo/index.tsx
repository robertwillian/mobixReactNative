import React from 'react';
import { View } from 'react-native';
import { Container, TitleLeft, Value } from './styles';

// import { Container } from './styles';
interface Props {
    title: string;
    description: string;

}
const ListInfo: React.FC<Props> = ({title, description}) => {
  return <Container>
      <TitleLeft>{title}</TitleLeft>
      <Value numberOfLines={2}>{description}</Value>
  </Container>;
}

export default ListInfo;