import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MemberElementProps = {
  profileSrc: string;
  nickname: string;
  introduction: string;
  userId: string;
};

const MemberElement: React.FC<MemberElementProps> = ({
  profileSrc,
  nickname,
  introduction,
  userId,
}) => (
  <StyledMemberListSidebar to={`/userpage/${userId}`}>
    <ProfileImg src={profileSrc} />
    <Nickname>{nickname}</Nickname>
    <Introduction>{introduction}</Introduction>
  </StyledMemberListSidebar>
);

export default MemberElement;

const StyledMemberListSidebar = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  padding: 20px 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  p {
    margin: 13px 0 0 0;
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
`;
const Nickname = styled.p`
  color: var(--color-grey-1);
  font-size: var(--font-size-md-1);
  margin: 30px 0 0 0;
`;
const Introduction = styled.p`
  color: var(--color-grey-1);
  font-size: var(--font-size-ft-1);
  line-height: 1.2rem;
`;
