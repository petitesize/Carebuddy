import React, { useState } from 'react';
import styled from 'styled-components';
import defaultImg from '@/assets/person.png';
import Button from '@/components/common/Button';
import TextArea from '@/components/common/TextArea';
import ListContainer from '@/components/Mypage&Userpage/ListContainer';
import PetCardContainer from '@/components/Mypage&Userpage/PetCardContainer';
import Input from '@/components/common/Input';
import SmallModal from '@/components/common/SmallModal';
import UserAsk from '@/pages/Mypage/UserAsk';

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
  padding-right: 40px;
`;

const UserContainer = styled.div`
  font-size: var(--font-size-md-1); //16
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const List = styled.span`
  display: flex;
  align-items: center;
  margin: 15px;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const WithdrawContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageBox = styled.div`
  img {
    height: 150px;
    padding: 10px;
  }
`;

const Data = styled.span`
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 30px;
  margin-left: 0;
`;

const Withdraw = styled.div`
  font-size: var(--font-size-ft-1); //14
  text-decoration: underline;
  cursor: pointer; /* 클릭할 수 있음을 나타내기 위해 커서 변경 */
`;

const UserInfoContainer = ({ email, nickname, introduction }) => (
  <Container>
    <InfoContainer>
      <Item>이메일</Item>
      <Data>{email}</Data>
    </InfoContainer>
    <InfoContainer>
      <Item>닉네임</Item>
      <Data>{nickname}</Data>
    </InfoContainer>
    <InfoContainer>
      <Item>소개글</Item>
      <Data>{introduction}</Data>
    </InfoContainer>
  </Container>
);

const ProfileContainer = ({ introduction, setIntroduction }) => {
  const handleInputChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleSaveClick = () => {
    alert('소개글이 저장되었습니다');
  };

  return (
    <Container>
      <UserContainer>
        <ImgContainer>
          <ImageBox><img src={defaultImg} alt="프로필 사진" /></ImageBox>
          <LinkButton>프로필 사진 업로드 하기</LinkButton>
        </ImgContainer>
        <Info>
          <List>
            <Item>닉네임</Item>
            <Input
              placeholder="입력하여주세요."
              value="케어버디"
            />
          </List>
          <List>
            <Item>소개글</Item>
            <Data>
              <TextArea
                size="md"
                placeholder="소개글을 입력하세요"
                value={introduction}
                onChange={handleInputChange}
              />
            </Data>
          </List>
          <ButtonContainer>
            <Button onClick={handleSaveClick}>저장하기</Button>
          </ButtonContainer>
        </Info>
      </UserContainer>
    </Container>
  );
};

const Mypage: React.FC = () => {
  const [introduction, setIntroduction] = useState('안녕하세요');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const handleWithdrawClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmWithdraw = () => {
    setIsModalOpen(false);
  };

  const contentItems = [
    { id: '1', content: '회원정보', component: <UserInfoContainer email="carebuddy@naver.com" nickname="케어버디" introduction={introduction} /> },
    { id: '2', content: '프로필', component: <ProfileContainer introduction={introduction} setIntroduction={setIntroduction} /> },
    { id: '3', content: '반려동물 관리', component: <PetCardContainer /> },
    { id: '4', content: '작성 글 목록', component: <ListContainer /> },
  ];

  return (
    <Container>
      {contentItems.map(item => (
        <React.Fragment key={item.id}>
          <Menu>
            <Item>{item.content}</Item>
          </Menu>
          {item.component}
        </React.Fragment>
      ))}
      <WithdrawContainer>
        <Withdraw onClick={handleWithdrawClick}>회원탈퇴</Withdraw>
      </WithdrawContainer>
      {isModalOpen && (
        <SmallModal
          component={<UserAsk onConfirm={handleConfirmWithdraw} onCancel={handleCloseModal} />}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default Mypage;