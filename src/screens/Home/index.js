import React from 'react';
import styled from 'styled-components/native';
import Card from '../../components/Card';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <Card />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
