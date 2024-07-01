import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import Button from '@components/common/Button';

const WriteButton: React.FC = () => (
  <Container>
    <P> 함께 나누고 싶은 이야기가 있나요?</P>
    <Button buttonSize="sm">글 작성하기</Button>
  </Container>
);

export default WriteButton;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-ft-1);
  margin-right: 8px;
`;
