import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC = () => (
  <Wrapper>
    <Header />
    <Outlet />
    <Footer />
  </Wrapper>
);

export default Layout;
