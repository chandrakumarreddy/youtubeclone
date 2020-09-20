import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Container} from '../common.css';

export default function Home() {
  const data = useSelector((state) => state.minicard);
  return (
    <Container>
      <Header />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
              channelThumbnail={item.snippet.thumbnails.default.url}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </Container>
  );
}
