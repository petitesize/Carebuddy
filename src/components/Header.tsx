import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import logo from '@assets/carebuddyLogo.png';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: white;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  /* align-items: center; */
  height: 100%;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  text-decoration: none;
  img {
    max-height: 60px;
    max-width: 120px;
  }
`;

const Menu = styled.nav`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 6rem;
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-black-main);
  font-weight: var(--font-weight-bold);
  padding: 10px 16px;
  padding-top: 40px;
  transition:
    color 0.3s ease,
    padding-top 0.3s ease;
  &:hover {
    color: var(--color-green-main);
    padding-top: 44px;
  }
  /* NavLink의 to props와 경로가 일치하면 active 클래스가 활성화 */
  &.active {
    transition:
      color 0.3s ease,
      padding-top 0.3s ease;
    border-bottom: 3px solid var(--color-green-main);
  }
`;

const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <Logo to="/">
        <img src={logo} alt="Logo" />
      </Logo>
      <Menu>
        <MenuItem to="/community">커뮤니티</MenuItem>
        <MenuItem to="/diary">건강관리</MenuItem>
        <MenuItem to="/diary">정보</MenuItem>
      </Menu>
      <Notification>
        서치, 마이페이지, 로그인, 로그아웃, 알림 등등 어떻게 할지 논의
      </Notification>
    </Content>
  </Wrapper>
);

export default Header;
