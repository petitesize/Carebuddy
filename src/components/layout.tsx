import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC = () => (
  <Wrapper>
    <Header />
    <Outlet />
  </Wrapper>
);

export default Layout;
