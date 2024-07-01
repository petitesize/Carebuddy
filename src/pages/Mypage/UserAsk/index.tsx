import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import imgSrc from '@/assets/AlertIcon.png';
import SmallModal from '@/components/common/SmallModal';
import UserTrue from '@/pages/Mypage/UserTrue/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: var(--font-size-md-1); //16
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
  margin: 20px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
`;

const WithdrawButton = styled.a`
  cursor: pointer;
  font-size: var(--font-size-ft-1);
  margin: 10px;
`;

const UserAsk: React.FC<{ onConfirm: () => void, onCancel: () => void }> = ({ onConfirm, onCancel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Logo src={imgSrc} />
      <Title>정말 탈퇴하시겠습니까?</Title>
      <Text>
        지금까지 저장되었던 아이들의 프로필과<br />
        소중한 건강체크 기록이 모두 삭제되며 <br />
        재가입해도 복구가 어려워요.
      </Text>
      <ButtonContainer>
        <Button
          buttonStyle='square-green'
          buttonSize='sm'
          onClick={onCancel}
        >
          계속 회원을 유지할래요
        </Button>
        <WithdrawButton onClick={handleOpenModal}>탈퇴하기</WithdrawButton>
        {isModalOpen && (
          <SmallModal
            component={<UserTrue onConfirm={onConfirm} />}
            onClose={handleCloseModal}
          />
        )}
      </ButtonContainer>
    </Container>
  );
};

export default UserAsk;