import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View``;

export const Image = styled.Image`
  width: ${width}px;
  height: ${height / 4}px;
`;

export const Cover = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Content = styled.View`
  margin: 0 16px;
`;
export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 2px;
`;
export const Description = styled.Text``;
