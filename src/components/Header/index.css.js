import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  padding: 0 16px;
  align-items: center;
  background-color: ${({$bgColor}) => $bgColor};
  flex-direction: row;
  justify-content: space-between;
`;

export const Cover = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

export const Logo = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 4px;
`;

export const Content = styled.View`
  flex-direction: row;
  width: 120px;
  justify-content: space-between;
`;
