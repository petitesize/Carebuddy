import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import CommunityCard from '@/components/Community/CommunityCard';
import Button from '@/components/common/Button';
import TopBar from '@/components/common/TopBar';

// 임시 데이터
import {
  tempCommunityName,
  tempCommunityIntroduction,
  // tempCommunityIntroduction2,
} from '@constants/tempData';

// type CommunityProps = {
// }

// 임시 - 이 주석 삭제
// eslint-disable-next-line no-empty-pattern
const Community: React.FC = () => (
  <>
    <TopBar
      category="커뮤니티"
      title="모든 커뮤니티"
    />
    <ButtonContainer>
      <Button buttonStyle="square-green" buttonSize="lg">
        강아지
      </Button>
      <Button buttonStyle="square-white" buttonSize="lg">
        고양이
      </Button>
    </ButtonContainer>
    <CardContainer>
      <CommunityCard
        name={tempCommunityName}
        introduction={tempCommunityIntroduction}
      />
      <CommunityCard
        name={tempCommunityName}
        introduction={tempCommunityIntroduction}
      />
      <CommunityCard
        name={tempCommunityName}
        introduction={tempCommunityIntroduction}
      />
      <CommunityCard
        name={tempCommunityName}
        introduction={tempCommunityIntroduction}
      />
      <CommunityCard
        name={tempCommunityName}
        introduction={tempCommunityIntroduction}
      />
    </CardContainer>
  </>
);

export default Community;

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
