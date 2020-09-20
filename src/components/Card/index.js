import React from 'react';
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
  return (
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
          <Title numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Title>
          <Description>{channelName}</Description>
        </Content>
      </Cover>
    </Container>
  );
}
