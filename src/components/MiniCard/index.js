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
  return (
    <Container>
      <Cover>
        <Thumbnail
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
        />
        <Content>
          <Title numberOfLines={3}>{title}</Title>
          <ChannelName numberOfLines={1}>{channelName}</ChannelName>
        </Content>
      </Cover>
    </Container>
  );
}
