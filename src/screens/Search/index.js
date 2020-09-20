import React, {useState} from 'react';
import {FlatList, Platform, StyleSheet, ActivityIndicator} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Cover, Icon, SearchInput} from './index.css';
import MiniCard from '../../components/MiniCard';

export default function Index() {
  const navigator = useNavigation();
  const {colors} = useTheme();
  const iconColor = colors.white.slice(1);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const data = useSelector((state) => state.minicard);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await (
        await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=130&q=${searchTerm}&type=video&key=`,
        )
      ).json();
      dispatch({type: 'FETCH_MINICARD_DATA', payload: res.items});
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <Cover style={styles.cover} $bgColor={colors.headerColor}>
        <TouchableWithoutFeedback onPress={navigator.goBack}>
          <Icon
            source={{
              uri: `https://img.icons8.com/material-sharp/24/${iconColor}/circled-left--v2.png`,
            }}
          />
        </TouchableWithoutFeedback>
        <SearchInput
          placeholder="Search here"
          onChange={(term) => setSearchTerm(term)}
          autoCapitalize="none"
        />
        <TouchableWithoutFeedback onPress={fetchData}>
          <Icon
            source={{
              uri: `https://img.icons8.com/fluent-systems-regular/24/${iconColor}/search.png`,
            }}
          />
        </TouchableWithoutFeedback>
      </Cover>
      {loading && <ActivityIndicator size={48} color="red" />}
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
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
