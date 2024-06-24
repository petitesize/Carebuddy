import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import GroupCard from '@/components/Group/GroupCard';
import Button from '@/components/common/Button';

// 임시 데이터
import {
  tempGroupName,
  tempGroupIntroduction,
  tempGroupMemberCount,
} from '../../../tempData';

type GroupProps = {

};

const Group: React.FC<GroupProps> = () => (
  <Body>
    <Main>
      <Button buttonStyle="square-green" buttonSize="lg">강아지</Button>
      <Button buttonStyle="square-white" buttonSize="lg">고양이</Button>
      <CardContainer>
        <GroupCard
          name={tempGroupName}
          introduction={tempGroupIntroduction}
          memberCount={tempGroupMemberCount}
        />
      </CardContainer>
    </Main>
  </Body>
);

export default Group;

const CardContainer = styled.div`
  width: 100%;
  background-color: red;
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
