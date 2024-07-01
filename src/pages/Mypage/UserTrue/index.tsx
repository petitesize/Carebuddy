import React from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import imgSrc from '@/assets/TrueIcon.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: var(--font-size-md-1); //16
  padding: 0 10px 10px 10px;
`;

const Title = styled.p`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
`;

const UserTure: React.FC<{ onConfirm: () => void, onCancel: () => void }> = ({ onConfirm, onCancel }) => (
  <Container>
    <Logo src={imgSrc} />
    <Title>탈퇴 완료</Title>
    <Text>
      회원님의 탈퇴가 완료되었습니다.<br />
      케어버디를 이용해주셔서 감사합니다.
    </Text>
    <ButtonContainer>
      <Button buttonStyle='square-green' onClick={onConfirm}>확인</Button>
    </ButtonContainer>
  </Container>
);

export default UserTure;
