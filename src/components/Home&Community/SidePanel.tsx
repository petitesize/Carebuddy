import React from 'react';
import styled from 'styled-components';

type SidePanelProps = {
  elementArray?: React.ReactNode;
  name?: string;
};

const SidePanel: React.FC<SidePanelProps> = ({ name, elementArray }) => (
    <StyledContainer>
      <P>{name}</P>
      <PanelElement>{elementArray}</PanelElement>
    </StyledContainer>
  );

export default SidePanel;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: solid 1px var(--color-grey-2);
  padding: 24px 20px;
  height: 100px; // 임시
  text-decoration: none; // 임시, link 들어갈 가능성 있어서 미리 추가
`;

const P = styled.p`
  font-weight: var(--font-weight-bold);
`;

const PanelElement = styled.div`
  cursor: pointer;
`;
