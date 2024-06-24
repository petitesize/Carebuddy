import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 컴포넌트
import ActionButton from '@/components/common/ActtionButton';
// import Button from '@/components/common/Button';
import LikeAndCommentCount from '@/components/Post/LikesAndCommentCount';
import CommentWritingBox from '@/components/Post/CommentWritingBox';

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

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
          <p>{tempTitle}</p>
          <PostOption>
            <LikeAndCommentCount
              likeCount={tempLikeCount}
              commentCount={tempCommentCount}
            />
            <ActionButton buttonBorder="border-solid" direction="horizonal" />
          </PostOption>
        </TitleContainer>
        <InformationContainer>
          <ProfileImg src={tempProfileSrc} alt="프로필 이미지" />
          <p>{tempNickname}</p>
          <p>|</p>
          <p>{tempDate}</p>
        </InformationContainer>
        <ContentContainer>
          <pre>{tempContent}</pre>
          <img src={tempProfileSrc} alt="이미지" />
          <Likes>
            <LuThumbsUp />
            <p>추천해요 {tempLikeCount}</p>
          </Likes>
        </ContentContainer>
        <CommentContainer>
          <CommentWritingBox nickname={tempNickname} />
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
  grid-template-rows: 40px 24px minmax(10vh, auto) minmax(30vh, auto);
`;

const PostListButtonContainer = styled.div`
  display: flex;
  color: var(--color-grey-1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-lg-1);
  font-weight: var(--font-weight-semibold);

  & > p {
    color: var(--color-black);
  }
`;

const PostOption = styled.div`
  display: flex;
`;

const InformationContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  align-items: center;

  color: var(--color-grey-1);

  p {
    font-size: var(--font-size-ft-1);
  }

  & > * {
    padding: 0 2px;
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const ContentContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin: 12px 0;
  font-size: var(--font-size-md-1);
  line-height: 1.4rem;
  color: var(--color-black);
  width: 100%;
  border-bottom: solid var(--color-grey-2) 1px;

  img {
    margin: 10px 0 20px 0;
    margin-top: 20px;
    width: 380px;
    height: auto;
  }

  pre {
    white-space: pre-wrap;
  }
`;

const Likes = styled.div`
  display: flex;
  color: var(--color-grey-1);
  font-size: var(--font-size-ft-1);
  align-items: center;
  cursor: pointer;
  padding-bottom: 12px;

  & > * {
    margin: 0 3px;
  }
`;

const CommentContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;

const CommentBox = styled.div``;

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
