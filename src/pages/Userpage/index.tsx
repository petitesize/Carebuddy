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

const Container = styled.div`
  margin: 30px 0 30px 0;
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
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0 30px 0;
`;

const List = styled.span`
  display: flex;
  align-items: center;
`;

const ListItem = styled.a`
  font-weight: var(--font-weight-bold);
  margin: 10px;
  display: flex;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DataList = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
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

const Data = styled.span`
  padding: 10px 0 10px 0;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: auto 0;
  text-align: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: space-between;
  border-bottom: 1px solid #cecece;
  padding: 10px 0;
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

const PetManagementContainer = () => (
  <Container>
    <div>반려동물 카드</div>
  </Container>
);

const PostListContainer = () => {
  const posts = [
    { id: '1', group: '그룹1', title: '안녕하세요', date: '2024-01-01' },
    { id: '2', group: '그룹2', title: '글입니다히히히', date: '2024-01-02' },
    { id: '3', group: '그룹3', title: '가운데정렬왜안돼', date: '2024-01-03' },
  ];

  return (
    <Container>
      <ListContainer>
        <DataContainer>
          <Title>그룹</Title>
          <Title>글제목</Title>
          <Title>작성일</Title>
        </DataContainer>
        {posts.map((post) => (
          <DataContainer key={post.id}>
            <Data>{post.group}</Data>
            <Data>{post.title}</Data>
            <Data>{post.date}</Data>
          </DataContainer>
        ))}
      </ListContainer>
    </Container>
  );
};

const contentItems = [
  { id: '1', content: '프로필', component: <ProfileContainer /> },
  { id: '2', content: 'User의 반려동물', component: <PetManagementContainer /> },
  { id: '3', content: '작성 글 목록', component: <PostListContainer /> },
];

const Userpage: React.FC = () => (
  <Body>
    <Main>
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

export default Userpage;
