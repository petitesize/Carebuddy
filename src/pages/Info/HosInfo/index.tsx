import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from 'rc-pagination';
import Select from '@/components/common/Select';
import SearchResult from '../../components/information/HostpitalSearchResult';
// import InfoPageContainer from '../../components/information/InfoPageContainer';
// UI확인용 임시데이터
const SelectDummyCityOptions = [
  { value: '', label: '시/도 선택' },
  { value: '서울특별시', label: '서울특별시' },
  { value: '부산광역시', label: '부산광역시' },
  { value: '인천광역시', label: '인천광역시' },
  { value: '대구광역시', label: '대구광역시' },
  { value: '대전광역시', label: '대전광역시' },
  { value: '광주광역시', label: '광주광역시' },
  { value: '울산광역시', label: '울산광역시' },
  { value: '세종특별자치시', label: '세종특별자치시' },
  { value: '경기도', label: '경기도' },
  { value: '충청북도', label: '충청북도' },
  { value: '충청남도', label: '충청남도' },
  { value: '전라남도', label: '전라남도' },
  { value: '경상북도', label: '경상북도' },
  { value: '경상남도', label: '경상남도' },
  { value: '강원특별자치도', label: '강원특별자치도' },
  { value: '전북특별자치도', label: '전북특별자치도' },
  { value: '제주특별자치도', label: '제주특별자치도' },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin: 5% auto; */
  align-items: center;
`;

const HospitalSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 204px;
  border: 1px solid #cecece;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
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

const HosInfo: React.FC = () => (
  <Wrapper>
    <HospitalSearchWrapper>
      <Select options={SelectDummyCityOptions} />
    </HospitalSearchWrapper>
  </Wrapper>
);

export default HosInfo;
