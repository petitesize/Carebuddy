import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 컴포넌트
import ActionButton from '@/components/common/ActtionButton';
// import Button from '@/components/common/Button';
import LikeAndCommentCount from '@/components/Post/LikesAndCommentCount';

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

// 임시 데이터
import { tempLikeCount, tempCommentCount } from '../../../tempData';

interface Post {
  // title?: string;
  // content?: string;
  // userId?: {
  //   nickName: string;
  // };
  // updatedAt?: string;
  // categoryId?: {
  //   _id: string;
  // };
  // likeCount: number;
  // likedUsers: string[];
  // postImage: string;
}

const Post: React.FC = () => (
  <Body>
    <Main>
      <Container>
        <PostListButtonContainer>
          <LuChevronLeft />
          <p>글 목록 보기</p>
        </PostListButtonContainer>
        <TitleContainer>
          <p>타이틀</p>
          <PostOption>
            <LikeAndCommentCount
              likeCount={tempLikeCount}
              commentCount={tempCommentCount}
            />
            <ActionButton buttonBorder="border-solid" direction="horizonal" />
          </PostOption>
        </TitleContainer>
        <InformationContainer>
          <p>글 정보</p>
        </InformationContainer>
        <ContentContainer>
          <p>글 내용 부분</p>
        </ContentContainer>
        <CommentContainer>
          <p>댓글 부분</p>
        </CommentContainer>
      </Container>
    </Main>
  </Body>
);

export default Post;

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 70%;
  grid-template-rows: 60px 20px minmax(60vh, auto) minmax(30vh, auto);
`;

const PostListButtonContainer = styled.div`
  display: flex;
  color: var(--color-grey-1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px grey;
  color: var(--color-grey-1);
  font-size: var(--font-size-lg-1);
  font-weight: var(--font-weight-semibold);
`;

const PostOption = styled.div`
  display: flex;
`;

const InformationContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const ContentContainer = styled.div`
  background-color: yellow;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const CommentContainer = styled.div`
  background-color: aqua;
  grid-column: 2 / 3;
  grid-row: 4 / 5;
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
