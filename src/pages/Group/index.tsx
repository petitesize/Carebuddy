import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import GroupCard from '@/components/Group/GroupCard';
import Button from '@/components/common/Button';

// 임시 데이터
import {
  tempGroupName,
  tempGroupIntroduction,
  tempGroupIntroduction2,
} from '../../../tempData';

type GroupProps = {
  // groupArray: string[]; // 임시 - 이후 데이터 들어오면 변경
};

// 임시 - 이 주석 삭제
// eslint-disable-next-line no-empty-pattern
const Group: React.FC<GroupProps> = ({ 
  // groupArray
 }) => (
  <Body>
    <Main>
      <ButtonContainer>
        <Button buttonStyle="square-green" buttonSize="lg">
          강아지
        </Button>
        <Button buttonStyle="square-white" buttonSize="lg">
          고양이
        </Button>
      </ButtonContainer>
      <CardContainer>
        <GroupCard name={tempGroupName} introduction={tempGroupIntroduction} />
        <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
        <GroupCard name={tempGroupName} introduction={tempGroupIntroduction} />
        <GroupCard name={tempGroupName} introduction={tempGroupIntroduction} />
        <GroupCard name={tempGroupName} introduction={tempGroupIntroduction} />
      </CardContainer>
    </Main>
  </Body>
);

export default Group;

const ButtonContainer = styled.div`
  padding: 20px 0;

  & > * {
    margin-right: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/* 임시 레이아웃 */

const Body = styled.div`
  flex: 1;
  padding-top: 80px;
`;

const Main = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1024px;
`;

/* 임시 레이아웃 끝 */
