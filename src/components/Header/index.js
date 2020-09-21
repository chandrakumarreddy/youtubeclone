import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {Container, Cover, Logo, Content} from './index.css';
import Text from '../../base/Text';

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const iconColor = colors.fontWhite.slice(1);
  return (
    <Container style={styles.container} $bgColor={colors.headerColor}>
      <Cover>
        <Logo
          source={{
            uri: 'https://img.icons8.com/color/30/000000/youtube-play.png',
          }}
          resizeMode="cover"
        />
        <Text style={{fontSize: 20, color: colors.white}}>Youtube</Text>
      </Cover>
      <Content>
        <Logo
          source={{
            uri: `https://img.icons8.com/fluent-systems-filled/24/${iconColor}/video-message.png`,
          }}
          resizeMode="cover"
        />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
          <Logo
            source={{
              uri: `https://img.icons8.com/fluent-systems-regular/24/${iconColor}/search.png`,
            }}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => dispatch({type: 'CHANGE_THEME'})}>
          <Logo
            source={{
              uri: `https://img.icons8.com/fluent-systems-filled/24/${iconColor}/gender-neutral-user.png`,
            }}
          />
        </TouchableWithoutFeedback>
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
