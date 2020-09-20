import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  Container,
  Image,
  Cover,
  Logo,
  Content,
  Title,
  Description,
} from './index.css';

export default function Card({videoId, title, channelName, channelThumbnail}) {
  const navigator = useNavigation();
  const {colors} = useTheme();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigator.navigate('VideoPlayer', {videoId})}>
      <Container>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
        />
        <Cover>
          <Logo
            source={{
              uri: channelThumbnail,
            }}
          />
          <Content>
            <Title numberOfLines={2} ellipsizeMode="tail" $color={colors.white}>
              {title}
            </Title>
            <Description $color={colors.white}>{channelName}</Description>
          </Content>
        </Cover>
      </Container>
    </TouchableWithoutFeedback>
  );
}
