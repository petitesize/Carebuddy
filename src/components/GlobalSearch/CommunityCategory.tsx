import React from 'react';
import styled from 'styled-components';

interface CommunityCategoryProps {
  children: React.ReactNode; 
}

const CommunityCategory: React.FC<CommunityCategoryProps> = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

export default CommunityCategory;

const Container = styled.div`
  background-color: var(--color-beige-main);
  border-radius: 4px;
  padding: 4px 12px;
  color: var(--color-black);
`;

const Text = styled.p`
  font-size: var(--font-size-sm-1);
`;

