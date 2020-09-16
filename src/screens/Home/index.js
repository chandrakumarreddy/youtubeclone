import React from 'react';
import {View, Text} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
}
