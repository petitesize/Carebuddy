import styled from "styled-components";
import React from 'react';
import defaultImg from '@/assets/person.png'

/* 임시 레이아웃 */

const Body = styled.div`
  flex: 1;
  padding-top: 80px;
`;

const Main = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1024px;
`;

/* 임시 레이아웃 끝 */

const Profile = styled.div`
  background-color: green;
`

const Container = styled.div``;

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
  justify-content: space-evenly;
  margin: 30px 0 30px 0;
`;

const List = styled.span`
  display: flex;
  align-items: center;
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
  margin: 10px 0 10px 0;
  text-decoration: underline;
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
  img {
    height: 150px;
    padding: 10px;
  }
`;

const ProfileContainer = () => (
  <UserContainer>
    <ImgContainer>
      <ImageBox><img src={defaultImg} alt="프로필 사진" /></ImageBox>
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
);

const PetManagementContainer = () => (
  <UserContainer>
    {/* Add specific UI components for Pet Management */}
    <div>Pet Management UI</div>
  </UserContainer>
);

const PostListContainer = () => (
  <UserContainer>
    {/* Add specific UI components for Post List */}
    <div>Post List UI</div>
  </UserContainer>
);

const contentItems = [
  { id: '1', content: '프로필', component: <ProfileContainer /> },
  { id: '2', content: '반려동물 관리', component: <PetManagementContainer /> },
  { id: '3', content: '작성 글 목록', component: <PostListContainer /> },
];

const Mypage: React.FC = () => (
  <Body>
    <Main>
      <Profile>
        첫번째 컨테이너
      </Profile>
      <Container>
        {contentItems.map(item => (
          <React.Fragment key={item.id}>
            <Menu>
              <Item>{item.content}</Item>
            </Menu>
            {item.component}
          </React.Fragment>
        ))}
      </Container>
    </Main>
  </Body>
);

export default Mypage;
