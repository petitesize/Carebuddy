import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type GroupElementProps = {
  groupName: string;
  introduction: string;
  groupId: string;
  memberCount: number;
};

const GroupElement: React.FC<GroupElementProps> = ({
  groupName,
  introduction,
  groupId,
  memberCount,
}) => (
  <StyledCommunityListSidebar to={`group/${groupId}`}>
    <GroupName>{groupName}</GroupName>
    <Introduction>{introduction}</Introduction>
    <MemberCount>{memberCount}명의 멤버</MemberCount>
  </StyledCommunityListSidebar>
);

export default GroupElement;

const StyledCommunityListSidebar = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding: 20px 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  p {
    margin: 7px 0;
  }
`;

const GroupName = styled.p`
  font-size: var(--font-size-md-1);
  font-weight: var(--font-weight-bold);
`;

const Introduction = styled.p`
  color: var(--color-grey-1);
  font-size: var(--font-size-ft-1);
  font-weight: var(--font-weight-regular);
  line-height: 1.2rem;
`;

const MemberCount = styled.p`
  //고도화시 추가
  color: var(--color-grey-1);
  font-size: var(--font-size-ft-1);
  font-weight: var(--font-weight-regular);
`;
