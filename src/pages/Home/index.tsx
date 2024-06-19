import React from 'react';
import styled from 'styled-components';

// 컴포넌트
// import Button from '@/components/common/Button';
import Banner from '@/components/Home&Community/Banner';
import FeedBox from '@/components/Home&Community/FeedBox';

// import profile from '@assets/profile.png'; // 임시

// 이 페이지에서 필요한 컴포넌트
// import SidePanel from "@/components/Home&Community/SidePanel";
// import FeedBox from "@/components/Home&Community/FeedBox";

// 임시 데이터
const tempTitle = '타이틀';
const tempContent = '콘텐츠';
const tempDate = '2000.00.00';
const tempNickname = "닉네임";
// const tempProfile = profile;
const tempProfileSrc = 'https://picsum.photos/200';
const tempPostId = '123'

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  // background-color: yellow;

  & > * {
    margin-bottom: 30px;
  }
`;

const FeedBoxContainer = styled.div`
  height: 2000px;
  width: 75%;
  border: solid 2px black;
`;

const FeedOptionContainer = styled.div`
  border: solid 2px black;
`;

const SidePanelContainer = styled.div`
  width: 25%;
  border: solid 2px blue;
`;

const Home: React.FC = () => (
  <>
    <Banner />
    <ContentContainer>
      <FeedBoxContainer>
        <FeedOptionContainer>
          <p>피드옵션 컨테이너</p>
        </FeedOptionContainer>
        <FeedBox postId={tempPostId} title={tempTitle} content={tempContent} uploadedDate={tempDate} nickname={tempNickname} profileSrc={tempProfileSrc}/>
        <FeedBox postId={tempPostId} title={tempTitle} content={tempContent} uploadedDate={tempDate} nickname={tempNickname} profileSrc={tempProfileSrc}/>
        <FeedBox postId={tempPostId} title={tempTitle} content={tempContent} uploadedDate={tempDate} nickname={tempNickname} profileSrc={tempProfileSrc}/>
      </FeedBoxContainer>
      <SidePanelContainer>
        <p>사이드패널 컨테이너</p>
      </SidePanelContainer>
    </ContentContainer>
  </>
);

export default Home;
