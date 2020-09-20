import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Cover, Logo, Content} from './index.css';
import Text from '../../base/Text';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Cover>
        <Logo
          source={{
            uri: 'https://img.icons8.com/color/30/000000/youtube-play.png',
          }}
          resizeMode="cover"
        />
        <Text style={{fontSize: 20}}>Youtube</Text>
      </Cover>
      <Content>
        <Logo
          source={{
            uri:
              'https://img.pngio.com/981-x-858-6-video-camera-icon-png-transparent-png-364739-video-camera-icon-png-840_774.png',
          }}
          resizeMode="cover"
        />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
          <Logo
            source={{
              uri:
                'https://www.iconfinder.com/data/icons/ios-7-icons/50/search-512.png',
            }}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
        <Logo
          source={{
            uri:
              'https://f1.pngfuel.com/png/933/945/137/social-media-icons-background-avatar-user-profile-login-black-circle-silhouette-symbol-png-clip-art.png',
          }}
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
