import React, { Component } from 'react'
import SearchItem from 'components/Search/SearchItem'
import styled from 'styled-components'

const StyledSearchList = styled.ul`
  width: 100%;
  position: absolute;
  height: 300px;
  overflow-y: scroll;
  z-index: 2;
  background-color: #f4f7f6;
  border-bottom: 1px solid #e6eaea;
`
const SearchList = ({ posts }) => (
  <StyledSearchList>
    {posts.map(item => <SearchItem key={item.node.id} {...item.node} />)}
  </StyledSearchList>
)

export default SearchList
