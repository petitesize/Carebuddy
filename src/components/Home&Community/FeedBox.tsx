import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import formatDate from '@/utils/formatDate';

type FeedBoxProps = {
  postId: string;
  title: string;
  content: string;
  profileSrc: string;
  nickname: string;
  uploadedDate: string;
};

const FeedBox: React.FC<FeedBoxProps> = ({
  title,
  content,
  profileSrc,
  nickname,
  uploadedDate,
  postId,
}) => {
  const processedContent = content.split('. ').slice(0, 2).join('. '); // 두 문장만 보여주기
  const formattedDate = formatDate({ rowDate: uploadedDate }); // tlrks 제외하고 날짜만 보여주기

  return (
    <StyledFeedBox to={`/post/${postId}`}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Content>
        {processedContent}
        <MoreSpan>... 더보기</MoreSpan>
      </Content>
      <ProfileContainer>
        <ProfileImg src={profileSrc} alt="프로필 이미지" />
        <p>{nickname}</p>
        <p>|</p>
        <p>{formattedDate}</p>
      </ProfileContainer>
    </StyledFeedBox>
  );
};

export default FeedBox;

const StyledFeedBox = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: solid 1px var(--color-grey-2);
  height: 150px;
  padding: 24px 20px;
  margin: 10px 0 20px 0;
  text-decoration: none;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  // 좋아요 댓글 개수 띄워주는 모달 추가될거라 flex row 그대로
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  color: var(--color-grey-1);
  font-size: var(--font-size-sm-1);
  border-top: 1px solid var(--color-grey-2);

  p {
    margin: 0 4px;
  }
`;

const ProfileImg = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
`;

const Title = styled.p`
  color: var(--color-green-main);
  font-size: var(--font-size-md-2);
  font-weight: var(--font-weight-bold);
`;

const Content = styled.pre`
  margin: 20px 0 12px 0;
  color: var(--color-grey-1);
  white-space: pre-wrap;
  line-height: 1.4;
  font-size: var(--font-size-ft-1);
  min-height: 60px;
`;

const MoreSpan = styled.span`
  color: var(--color-blue);
  font-size: var(--font-size-sm-1);
`;
