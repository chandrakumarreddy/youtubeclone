import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 16px;
  margin-top: 16px;
`;
export const Cover = styled.View`
  flex-direction: row;
`;
export const Thumbnail = styled.Image`
  width: 45%;
  height: 100px;
`;
export const Content = styled.View`
  margin: 0 16px;
  flex-shrink: 1;
`;
export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  color: ${({$color}) => $color};
`;
export const ChannelName = styled.Text`
  font-size: 14px;
  color: ${({$color}) => $color};
`;
