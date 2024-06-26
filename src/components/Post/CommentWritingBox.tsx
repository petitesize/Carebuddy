import React from 'react';
import styled from 'styled-components';

// 임시 데이터
import { tempCommentText } from '@constants/tempData';

// 컴포넌트
import Button from '../common/Button';

type CommentWritingBoxProps = {
  nickname: string;
  // onClick?: () => void; // 임시. 나중에 필수값으로 변경
};

const CommentWritingBox: React.FC<CommentWritingBoxProps> = ({
  nickname,
  // onClick,
}) => (
  <StyledCommentWritingBox>
    <Nickname>{nickname}</Nickname>
    <CommentBox
      value={tempCommentText}
      placeholder="댓글 내용을 입력하세요..."
    />
    <ButtonContainer>
      <Button buttonStyle="link" buttonSize="sm">
        등록하기
      </Button>
    </ButtonContainer>
  </StyledCommentWritingBox>
);

export default CommentWritingBox;

const StyledCommentWritingBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-2);
  border-radius: 10px;
  padding: 10px 15px;
  position: relative;
  height: 120px;
  margin: 20px 0;
`;

const Nickname = styled.p`
  margin-bottom: 5px;
`;

const CommentBox = styled.textarea`
  height: 70px;
  border: none;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 110px;
  right: 15px;
  font-size: var(--font-size-ft-1);
  margin: 0 5px 10px 5px;
`;
