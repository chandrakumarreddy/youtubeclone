import React from 'react';
import {WebView} from 'react-native-webview';
import {Container} from '../common.css';

export default function Index({videoId}) {
  return (
    <Container>
      <WebView
        source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        javaScriptEnabled
        domStorageEnabled
      />
    </Container>
  );
}
