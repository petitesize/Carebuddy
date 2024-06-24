import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// 아이콘
// import { LuMessagesSquare } from 'react-icons/lu';

type GroupCardProps = {
  name: string;
  introduction: string;
  memberCount: number;
};

const GroupCard: React.FC<GroupCardProps> = ({
  name,
  introduction,
  memberCount,
}) => (
  <>
    <p>{name}</p>
    <p>{introduction}</p>
    <p>{memberCount}</p>
  </>
);

export default GroupCard;
