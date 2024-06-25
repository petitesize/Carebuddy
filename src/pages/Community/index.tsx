import React from 'react';
import styled from 'styled-components';

// 컴포넌트
// import Button from '@/components/common/Button';
import FeedBox from '@/components/Home&Community/FeedBox';
import SidePanel from '@/components/Home&Community/SidePanel';
import WriteButton from '@/components/Home&Community/WirteButton';
import MemberElement from '@/components/Home&Community/MemberElement';
import Search from '@/components/common/Search';
import Button from '@/components/common/Button';

// 임시 데이터
import {
  tempTitle,
  tempContent,
  tempDate,
  tempNickname,
  tempProfileSrc,
  tempPostId,
  tempMemberArray1,
} from '../../../tempData';

const Community: React.FC = () => {
  // 작동 테스트용
  const tempGroup = (
    <MemberElement
      key={tempMemberArray1.userId}
      userId={tempMemberArray1.userId}
      nickname={tempMemberArray1.nickname}
      introduction={tempMemberArray1.introduction}
      profileSrc={tempProfileSrc}
    />
  );

  return (
    <Body>
      <Main>
        <SearchContainer>
          <Search
            // // onSearch={(value) => handleSearch(value)}
            placeholder="검색할 게시글의 제목을 입력하세요"
          />
        </SearchContainer>
        <Container>
          <FeedBoxContainer>
            <FeedOptionContainer>
              <WriteButton />
            </FeedOptionContainer>
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
            <LinkButtonContainer>
              <Button buttonStyle="link" buttonSize="sm">
                그룹 탈퇴
              </Button>
              <Button buttonStyle="link" buttonSize="sm">
                다른 그룹 둘러보기
              </Button>
            </LinkButtonContainer>
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
  height: 200px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 10%;
  width: 100%;
  height: auto;
  margin: 0 auto;

  & > * {
    margin-bottom: 30px;
  }
`;

const FeedOptionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FeedBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-1);
`;

const LinkButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SidePanelContainer = styled.div``;
