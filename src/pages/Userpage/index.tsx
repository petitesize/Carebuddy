import styled from "styled-components";
import React from 'react';
import defaultImg from '@/assets/person.png'
import ListContainer from "@/components/Mypage&Userpage/ListContainer";
import PetCardContainer from "@/components/Mypage&Userpage/PetCardContainer";
import TopBar from '@/components/common/TopBar';

const Container = styled.div`
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

const UserContainer = styled.div`
  font-size: var(--font-size-md-1); //16
  display: flex;
  align-items: center;
  margin: 30px 0 30px 0;
`;

const List = styled.span`
  display: flex;
  align-items: center;
`;

const ListItem = styled.a`
  margin: 10px;
  display: flex;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const InputList = styled.span`
  display: flex;
`;

const ImageBox = styled.div`
  img {
    height: 150px;
    padding: 10px;
  }
`;

const ProfileContainer = () => (
  <Container>
    <UserContainer>
      <ImgContainer>
        <ImageBox><img src={defaultImg} alt="프로필 사진" /></ImageBox>
      </ImgContainer>
      <Info>
        <InputList>
          <List>
            <ListItem>케어버디</ListItem>
          </List>
        </InputList>
        <InputList>
          <List>
            <ListItem>안녕하세요. 동물을 사랑합니다^^</ListItem>
          </List>
        </InputList>
      </Info>
    </UserContainer>
  </Container>
);

const contentItems = [
  { id: '1', content: '프로필', component: <ProfileContainer /> },
  { id: '2', content: 'User의 반려동물', component: <PetCardContainer /> },
  { id: '3', content: '작성 글 목록', component: <ListContainer /> },
];

const Userpage: React.FC = () => (
  <Container>
    <TopBar category="carebuddy" title="유저 페이지" />
    {contentItems.map(item => (
      <React.Fragment key={item.id}>
        <Menu>
          <Item>{item.content}</Item>
        </Menu>
        {item.component}
      </React.Fragment>
    ))}
  </Container>
);

export default Userpage;
