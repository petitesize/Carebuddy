import styled from 'styled-components';
import React from 'react';

const Container = styled.div``;

const UserContainer = styled.div`
  font-size: 16px;
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
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

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0;
`;

const Data = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const SectionContainer = styled.div`
  margin: 20px 0 40px 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #cecece;
`;

const DataContainer = styled.div``;

const ListSection: React.FC = () => {

  return (
    <Container>
      <Menu>
        <Item>작성 글 목록</Item>
      </Menu>
      <SectionContainer>
        <UserContainer>
          <ListContainer>
            <ListItem>
              <Title>그룹</Title>
            </ListItem>
              <ListItem>
                <DataContainer>
                    <Data>눈 고양이</Data>
                </DataContainer>
              </ListItem>
              <ListItem>
                <DataContainer>
                    <Data>코 강아지</Data>
                </DataContainer>
              </ListItem>
          </ListContainer>
        </UserContainer>
      </SectionContainer>
    </Container>
  );
};

export default ListSection;