import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Container, Cover, Logo, Content} from './index.css';
import Text from '../../base/Text';

export default function Header() {
  return (
    <Container style={styles.container}>
      <Cover>
        <Logo
          source={{
            uri:
              'https://cdn.iconscout.com/icon/free/png-256/youtube-85-226402.png',
          }}
          resizeMode="cover"
        />
        <Text style={{fontSize: 20}}>Youtube</Text>
      </Cover>
      <Content>
        <Logo
          source={{
            uri:
              'https://www.clipartmax.com/png/middle/58-585369_old-video-camera-free-icon-video-cam-vector-outline.png',
          }}
          resizeMode="cover"
        />
        <Logo
          source={{
            uri:
              'https://www.iconfinder.com/data/icons/ios-7-icons/50/search-512.png',
          }}
          resizeMode="cover"
        />
        <Logo
          source={{
            uri:
              'https://f1.pngfuel.com/png/933/945/137/social-media-icons-background-avatar-user-profile-login-black-circle-silhouette-symbol-png-clip-art.png',
          }}
          resizeMode="cover"
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
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
