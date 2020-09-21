import React from 'react';
import {WebView} from 'react-native-webview';
import {WebViewWrapper} from './index.css';
import {Container} from '../common.css';

export default function Index({route}) {
  const {videoId} = route.params;
  return (
    <Container>
      <WebViewWrapper>
        <WebView
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
          javaScriptEnabled
          domStorageEnabled
        />
      </WebViewWrapper>
    </Container>
  );
}
