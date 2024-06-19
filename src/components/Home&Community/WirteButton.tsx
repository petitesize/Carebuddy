import React from 'react';
import styled from 'styled-components';

// 추후 베이스 컴포넌트의 버튼 import 하기

const WriteButton: React.FC = () => (
  <Container>
    <P> 함께 나누고 싶은 이야기가 있나요?</P>
    <button type="button">글 작성하기</button>
  </Container>
);

export default WriteButton;

const Container = styled.div`
display: flex;
align-items: center;
`;

const P = styled.p`
  font-size: var(--font-size-sm-1);
  margin-right: 4px;
`
