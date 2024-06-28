import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { LuSearch } from 'react-icons/lu';

// 스타일을 정의하는 객체
const searchSizes = {
  md: css`
    width: 500px;
    font-size: var(--font-size-md-2);
    padding: 6px 8px;
  `,
  sm: css`
    width: 300px;
    font-size: var(--font-size-sm);
    padding: 4px 8px;
  `,
};

const searchStyles = {
  round: css`
    border-radius: 30px;
  `,
  square: css``,
};

interface StyledSearchProps {
  searchSize?: 'sm' | 'md';
  searchStyle?: 'round' | 'square';
}

const SearchBox = styled.div<StyledSearchProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-grey-2);
  height: auto;
  ${(props) => props.searchSize && searchSizes[props.searchSize]}
  ${(props) => props.searchStyle && searchStyles[props.searchStyle]}
`;

const StyledInput = styled.input<StyledSearchProps>`
  border: none;
  width: 100%;
  ${(props) => props.searchSize && searchSizes[props.searchSize]}

  &:focus {
    outline: none;
  }
`;

interface SearchProps extends StyledSearchProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  searchSize = 'md',
  searchStyle = 'round',
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
      <SearchBox searchSize={searchSize} searchStyle={searchStyle}>
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

const StyledIcon = styled(LuSearch)`
  font-size: 24px;
  margin-right: 4px;
  color: var(--color-grey-2);
  cursor: pointer;
`;
