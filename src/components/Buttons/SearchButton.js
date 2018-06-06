import React from 'react'
import styled from 'styled-components'
import searchIcon from 'images/search.svg'
const StyledSearchButton = styled.button`
  padding: 28px;
  float: right;
  font-size: 0;
  span {
    display: block;
    width: 14px;
    height: 14px;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${searchIcon});
  }
`

const SearchButton = ({ onHandleSearchButton }) => (
  <StyledSearchButton onClick={onHandleSearchButton}>
    <span />
    search
  </StyledSearchButton>
)

export default SearchButton
