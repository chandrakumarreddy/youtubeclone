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

export default function Card() {
  return (
    <Container>
      <Image
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr7_phGThSR4Y1fiONdY8-6WZ-jcwT-e4aKw&usqp=CAU',
        }}
      />
      <Cover>
        <Logo
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr7_phGThSR4Y1fiONdY8-6WZ-jcwT-e4aKw&usqp=CAU',
          }}
        />
        <Content>
          <Title numberOfLines={2} ellipsizeMode="tail">
            Beautiful saree borderd with gold flakes
          </Title>
          <Description>Beautiful saree borderd with gold flakes</Description>
        </Content>
      </Cover>
    </Container>
  );
}
