import React from 'react';
import {ScrollView} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Container} from '../common.css';

export default function Home() {
  return (
    <Container>
      <Header />
      <ScrollView
        bounces="off"
        showsVerticalScrollIndicator={false}
        snapToAlignment="center">
        <Card />
      </ScrollView>
    </Container>
  );
}
