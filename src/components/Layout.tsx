import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
`;

const OutletWrapper = styled.div`
  /* min-height: 100vh;
  padding-top: 130px; */
  /* 반응화 고려 시 조절 필요 */
  /* width: 1024px;
  display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  /* align-items: center; */
  padding-top: 130px;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Layout: React.FC = () => (
  <Wrapper>
    <Header />
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
    <Footer />
  </Wrapper>
);

export default Layout;
