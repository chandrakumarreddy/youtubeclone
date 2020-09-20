import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Container} from '../common.css';
import {
  LittleContainer,
  PopularCards,
  LittleCardTitle,
  ExploreTitle,
} from './index.css';

const content = ['Music', 'Movies', 'News', 'Trending', 'Cricket', 'Football'];

const LittleCard = ({title}) => (
  <LittleContainer>
    <LittleCardTitle>{title}</LittleCardTitle>
  </LittleContainer>
);

export default function Index() {
  const {colors} = useTheme();
  const data = useSelector((state) => state.minicard);
  return (
    <Container>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} bounces="off">
        <PopularCards>
          {content.map((item) => (
            <LittleCard title={item} />
          ))}
        </PopularCards>
        <ExploreTitle $color={colors.white}>Trending videos</ExploreTitle>
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
      </ScrollView>
    </Container>
  );
}
