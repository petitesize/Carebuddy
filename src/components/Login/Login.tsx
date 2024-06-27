// 체크박스 베이스컴포넌트화

import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';
import CheckBox from '../common/CheckBox';

const Login: React.FC = () => {
  const [keepLogin, setKeepLogin] = useState(false);

  const handleCheckBoxChange = () => {
    setKeepLogin((prevState) => !prevState);
  };

  return (
    <Container>
      <p>로그인</p>
      <Input borderStyle="square" />
      <Input borderStyle="square" />
      <SignupSection>
        <CheckBoxSection>
          <CheckBox
            value="keepLogin"
            text="기억하기"
            checked={keepLogin}
            onChange={handleCheckBoxChange}
          />
        </CheckBoxSection>
        <p>회원가입</p>
      </SignupSection>

      <Button buttonStyle="square-green">로그인</Button>
      <p>아이디/비밀번호 찾기</p>

      <Hr />
      <p>간편 로그인/회원가입</p>
      <div>카카오로그인 자리</div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // background-color: yellow;
`;

const SignupSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  // background-color: red;
`;

const CheckBoxSection = styled.div`
  display: flex;
  flex-direction: flex-start;
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid var(--color-grey-2);
  width: 80%;
`;
