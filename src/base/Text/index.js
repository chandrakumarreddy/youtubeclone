import React from 'react';
import styled from 'styled-components/native';

export default function Index({children, style}) {
  return <StyledText style={[style]}>{children}</StyledText>;
}

const StyledText = styled.Text``;
