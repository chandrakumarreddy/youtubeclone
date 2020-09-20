import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  Cover,
  Thumbnail,
  Content,
  Title,
  ChannelName,
} from './index.css';

export default function Index({videoId, title, channelName}) {
  const {colors} = useTheme();
  return (
    <Container>
      <Cover>
        <Thumbnail
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
        />
        <Content>
          <Title numberOfLines={3} $color={colors.white}>
            {title}
          </Title>
          <ChannelName numberOfLines={1} $color={colors.white}>
            {channelName}
          </ChannelName>
        </Content>
      </Cover>
    </Container>
  );
}
