import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledSearchInput = styled.input`
  float: left;
  padding: 20px;
  border: 0;
  background-color: transparent;
  font-size: 13px;
  line-height: normal;
  outline: none;
  height: 100%;
`
const SearchInput = ({
  onHandleSearchInput,
  content,
  placeholder = '검색어를 입력해 주세요.',
}) => (
  <label htmlFor="search-input">
    search-input
    <StyledSearchInput
      name="search-input"
      value={content}
      onChange={onHandleSearchInput}
      type="text"
      placeholder={placeholder}
      id="search-input"
    />
  </label>
)

export default SearchInput
