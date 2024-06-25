import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { LuSearch } from 'react-icons/lu';

// 스타일을 정의하는 객체
const searchSizes = {
  md: css`
    width: 500px;
    font-size: var(--font-size-md-2);
    padding: 16px 20px;
  `,
  sm: css`
    width: 300px;
    font-size: var(--font-size-sm);
    padding: 10px 12px;
  `,
};

interface StyledSearchProps {
  searchSize?: 'sm' | 'md';
}

interface SearchProps extends StyledSearchProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  searchSize = 'md',
  onSearch,
  ...props
}) => {
  // 임시: {...props} 사용으로 API 붙이면서 공통으로 사용하지 않을 가능성 높음
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBox searchSize={searchSize}>
        <StyledInput
          type="text"
          onChange={handleChange}
          value={searchValue}
          searchSize={searchSize}
          {...props}
        />
        <StyledIcon />
      </SearchBox>
    </form>
  );
};

export default Search;

const SearchBox = styled.div<StyledSearchProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-grey-2);
  height: auto;
  border-radius: 30px;
`;

const StyledInput = styled.input<StyledSearchProps>`
  border: none;
  border-radius: 30px;
  width: 100%;
  ${(props) => props.searchSize && searchSizes[props.searchSize]}
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(LuSearch)`
  font-size: 24px;
  margin-right: 20px;
  color: var(--color-grey-2);
  cursor: pointer;
`;
