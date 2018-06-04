import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledSearchItem = styled.li`
  line-height: 20px;
  padding: 15px;
`

const StyledSearchItemLink = styled(Link)`
  color: #212121;
`
const SearchItem = ({ title, slug }) => (
  <StyledSearchItem>
    <StyledSearchItemLink to={`/blog/${slug}`}>{title}</StyledSearchItemLink>
  </StyledSearchItem>
)

export default SearchItem
