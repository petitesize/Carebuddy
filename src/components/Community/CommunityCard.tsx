import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 아이콘
import { LuMessagesSquare } from 'react-icons/lu';

// 컴포넌트
import Button from '../common/Button';

type CommunityCardProps = {
  name: string;
  introduction: string;
};

const CommunityCard: React.FC<CommunityCardProps> = ({ name, introduction }) => (
  <Container to="/">
    <IconContainer>
      <LuMessagesSquare />
    </IconContainer>
    <InfoContainer>
      <p>{name}</p>
      <Introduction>{introduction}</Introduction>
      <ButtonContainer>
        <Button buttonStyle="square-white" buttonSize="sm">
          가입
        </Button>
      </ButtonContainer>
    </InfoContainer>
  </Container>
);

export default CommunityCard;


const Container = styled(Link)`
  display: flex;
  flex-direction: row;

  width: 236px;
  min-height: 120px;
  text-decoration: none;
  cursor: pointer;
  border: solid 1px var(--color-grey-2);
  margin-bottom: 20px;
  padding: 16px 16px;
  box-sizing: border-box;
  color: var(--color-black);
  border-radius: 8px;
`;

const IconContainer = styled.div`
  color: var(--color-green-main);
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; 
`;

const Introduction = styled.p`
  font-size: var(--font-size-ft-1);
  color: var(--color-grey-1);
  padding: 20px 0;
  line-height: 1.3;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
`;
