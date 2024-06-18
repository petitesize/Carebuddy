import styled from "styled-components";
import React from 'react';
import UserInfoSection from '@components/Mypage/UserInfoSection'
import PetCardSection from '@components/Mypage/PetCardSection'
import ListSection from '@components/Mypage/ListSection'
import ProfileSection from '@components/Mypage/ProfileSection'

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

const Mypage: React.FC = () => {
  return (
    <Body>
      <Main>
          <UserInfoSection />
          <ProfileSection />
          <PetCardSection />
          <ListSection />
      </Main>
    </Body>
  );
};

export default Mypage;