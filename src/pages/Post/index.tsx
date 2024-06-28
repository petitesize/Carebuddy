import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// 컴포넌트
import ActionButton from '@/components/common/ActtionButton';
// import Button from '@/components/common/Button';
import LikeAndCommentCount from '@/components/Post/LikesAndCommentCount';
import CommentWritingBox from '@/components/Post/CommentWritingBox';
import Comment from '@/components/Post/Comment';

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

// 임시 데이터
import {
  tempTitle,
  tempContent,
  tempDate,
  tempNickname,
  tempProfileSrc,
  // tempPostId,
  // tempGroupArray1,
  tempLikeCount,
  tempCommentCount,
  tempCommentText,
} from '@constants/tempData';

interface PostProps {
  // title?: string;
  // content?: string;
  // userId?: {
  //   nickName: string;
  // };
  // postId?: {
  //   updatedAt: string;
  //   likeCount: number;
  //   postImage?: string;
  //   categoryId?: string;
  // };
}

// 임시 - 이 주석은 데이터 들어오면 삭제
// eslint-disable-next-line no-empty-pattern
const Post: React.FC<PostProps> = () => (

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
        <Comment
          text={tempCommentText}
          nickname={tempNickname}
          date={tempDate}
          profileImg={tempProfileSrc}
        />
      </CommentContainer>
    </Container>

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
