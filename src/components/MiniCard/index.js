import React from 'react';
import {
  Container,
  Cover,
  Thumbnail,
  Content,
  Title,
  ChannelName,
} from './index.css';

export default function Index() {
  return (
    <Container>
      <Cover>
        <Thumbnail
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr7_phGThSR4Y1fiONdY8-6WZ-jcwT-e4aKw&usqp=CAU',
          }}
        />
        <Content>
          <Title>Dummy Title</Title>
          <ChannelName>Channel name</ChannelName>
        </Content>
      </Cover>
    </Container>
  );
}
