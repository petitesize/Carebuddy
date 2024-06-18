import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 30px 0 30px 0;
  display: flex;
  justify-content: center;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 22px;
  border-bottom: 1px solid #cecece;
  padding-bottom: 10px;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
`;

const PetCardSection: React.FC = () => {

  return (
    <Container>
      <Menu>
        <Item>user 님의 반려동물</Item>
      </Menu>
      <UserContainer>
        {/* <PetProfileCards 
          profiles={pets || null}
          selectedPetName={selectedPetName}
          onClick={handleClick}
        /> */}
      </UserContainer>
    </Container>
  );
};

export default PetCardSection;