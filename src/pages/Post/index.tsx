import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 컴포넌트

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

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
          <p>제목부분</p>
        </TitleContainer>
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
  grid-template-rows: 60px minmax(60vh, auto) minmax(30vh, auto);
`;

const PostListButtonContainer = styled.div`
  display: flex;
  color: var(--color-grey-1);
`;

const TitleContainer = styled.div`
  
  border: solid 1px grey;
  color: var(--color-grey-1);
`;

const ContentContainer = styled.div`
  background-color: yellow;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const CommentContainer = styled.div`
  background-color: aqua;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
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
