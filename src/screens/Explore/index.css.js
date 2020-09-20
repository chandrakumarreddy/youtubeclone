import styled from 'styled-components/native';

export const LittleContainer = styled.View`
  height: 40px;
  background-color: red;
  width: 120px;
  border-radius: 8px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LittleCardTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

export const PopularCards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 16px;
`;

export const ExploreTitle = styled.Text`
  margin: 16px;
  font-size: 20px;
`;
