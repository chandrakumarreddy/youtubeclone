import styled from 'styled-components/native';
export {Container} from '../common.css';

export const Cover = styled.View`
  padding: 0 16px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({$bgColor}) => $bgColor};
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const SearchInput = styled.TextInput`
  background-color: #e6e6e6;
  height: 36px;
  flex: 1;
  margin: 0 8px;
  padding: 0 16px;
  border-radius: 8px;
`;
