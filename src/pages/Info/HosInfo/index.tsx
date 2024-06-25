import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from 'rc-pagination';
import SearchResult from '../../components/information/HostpitalSearchResult';
// import InfoPageContainer from '../../components/information/InfoPageContainer';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  height: auto;
  align-items: center;
`;

const StyledPagination = styled(Pagination)`
  .rc-pagination-item-link:hover {
    color: var(--color-green-main);
    border-color: var(--color-green-main);
  }

  .rc-pagination-item-active,
  .rc-pagination-item:hover {
    border-color: var(--color-green-main);
  }
  .rc-pagination-item-active a,
  .rc-pagination-item:hover a,
  .rc-pagination-item-link:hover {
    color: var(--color-green-main);
  }
`;

const HosInfo: React.FC = () => <Wrapper />;

export default HosInfo;
