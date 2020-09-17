import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {Container, Cover, Icon, SearchInput} from './index.css';
import MiniCard from '../../components/MiniCard';

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await (
        await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=130&q=${searchTerm}&type=video&key=`,
        )
      ).json();
      setData(res.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <Cover style={styles.cover}>
        <Icon
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_quu1zbJGHA0JVcN4G-EzSVCiu0esgeHBVw&usqp=CAU',
          }}
        />
        <SearchInput
          placeholder="Search here"
          onChange={(term) => setSearchTerm(term)}
          value={searchTerm}
        />
        <TouchableWithoutFeedback onPress={fetchData}>
          <Icon
            source={{
              uri: 'https://static.thenounproject.com/png/373675-200.png',
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
    backgroundColor: '#fff',
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
