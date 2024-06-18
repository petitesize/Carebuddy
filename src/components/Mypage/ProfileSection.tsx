import styled from "styled-components";
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: var(--font-size-md-1); //16
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 30px 0;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-2); //22
  border-bottom: 1px solid var(--color-grey-2);
  padding-bottom: 10px;
`;

const List = styled.span`
  display: flex;
  align-items: center;
`;

const Item = styled.a`
  font-weight: var(--font-weight-bold);
`;

const ListItem = styled.a`
  font-weight: var(--font-weight-bold);
  margin: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkButton = styled.div`
`

const DataList = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InputList = styled.span`
  display: flex;
`;

const Button = styled.div``;

const ImageBox = styled.div`
  padding: 10px;
  background-color: var(--color-green-main);
  border: none;
  border-radius: 100%;
  height: 140px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden; /* 이미지가 부모요소 안에 보이게 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 */
    position: absolute; /* 이미지가 부모 요소를 기준으로 위치 */
    top: 0;
    left: 0;
  }
`;

const PetfileSection: React.FC = () => {
  return (
<Container>
      <Menu>
        <Item>프로필 수정하기</Item>
      </Menu>
      <UserContainer>
        <ImgContainer>
          <ImageBox>이미지
          </ImageBox>
          <LinkButton>프로필 사진 업로드 하기</LinkButton>
        </ImgContainer>
        <Info>

            <InputList>
              <List>
                <ListItem>닉네임</ListItem>
              </List>
            </InputList>
            <InputList>
              <List>
                <ListItem>소개글</ListItem>
              </List>
            </InputList>

          <DataList>
            <Button>저장하기</Button>
          </DataList>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default PetfileSection;