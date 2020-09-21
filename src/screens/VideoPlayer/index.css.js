import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('screen');

export const WebViewWrapper = styled.View`
  width: ${width}px;
  height: ${height / 3}px;
`;
