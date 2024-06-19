import React from 'react';
import styled from 'styled-components';

// 컴포넌트
// import Button from '@/components/common/Button';
import FeedBox from '@/components/Home&Community/FeedBox';
import SidePanel from '@/components/Home&Community/SidePanel';
import WriteButton from '@/components/Home&Community/WirteButton';
import GroupElement from '@/components/Home&Community/GroupElement';
import Search from '@/components/Home&Community/Search';

// 임시 데이터
import {
  tempTitle,
  tempContent,
  tempDate,
  tempNickname,
  tempProfileSrc,
  tempPostId,
  tempGroupArray1,
} from '../../../tempData';

const Community: React.FC = () => {
  // 작동 테스트용
  const tempGroup = (
    <GroupElement
      key={tempGroupArray1.groupId}
      groupId={tempGroupArray1.groupId}
      groupName={tempGroupArray1.groupName}
      introduction={tempGroupArray1.introduction}
      memberCount={tempGroupArray1.memberCount}
    />
  );

  return (
    <Body>
      <Main>
        <SearchContainer>
          <Search
            width="500px"
            fontSize="var(--font-size-md-2)"
            padding="15px 16px"
            onSearch={(value) => handleSearch(value)}
            placeholder="검색할 게시글의 제목을 입력하세요"
          />
        </SearchContainer>
        <Container>
          <FeedBoxContainer>
            <WriteButtonContainer>
              <WriteButton />
            </WriteButtonContainer>
            <FeedBox
              postId={tempPostId}
              title={tempTitle}
              content={tempContent}
              uploadedDate={tempDate}
              nickname={tempNickname}
              profileSrc={tempProfileSrc}
            />
            <FeedBox
              postId={tempPostId}
              title={tempTitle}
              content={tempContent}
              uploadedDate={tempDate}
              nickname={tempNickname}
              profileSrc={tempProfileSrc}
            />
            <FeedBox
              postId={tempPostId}
              title={tempTitle}
              content={tempContent}
              uploadedDate={tempDate}
              nickname={tempNickname}
              profileSrc={tempProfileSrc}
            />
          </FeedBoxContainer>
          <SidePanelContainer>
            <SidePanel name="그룹 멤버" elementArray={tempGroup} />
          </SidePanelContainer>
        </Container>
      </Main>
    </Body>
  );
};

export default Community;

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

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 200px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin: 0 auto;

  & > * {
    margin-bottom: 30px;
  }
`;

const WriteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FeedBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  // background-color: yellow; // 임시
  color: var(--color-grey-1);
`;

const FeedOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // background-color: aqua; // 임시
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm-1);

  & > * {
    margin-right: 10px;
  }
`;

const SidePanelContainer = styled.div`
  width: 20%;
  // border: solid 2px blue; // 임시
`;
