import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Container, Cover, Icon, SearchInput, Content} from './index.css';
import MiniCard from '../../components/MiniCard';

export default function Index() {
  return (
    <Container>
      <Cover style={styles.cover}>
        <Icon
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_quu1zbJGHA0JVcN4G-EzSVCiu0esgeHBVw&usqp=CAU',
          }}
        />
        <SearchInput placeholder="Seacrh here" />
        <Icon
          source={{uri: 'https://static.thenounproject.com/png/373675-200.png'}}
        />
      </Cover>
      <Content showsVerticalScrollIndicator={false} bounces="off">
        <MiniCard />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
