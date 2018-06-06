import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLogo = styled.h1`
  display: block;
  position: absolute;
  margin: 0;
  top: 21px;
  left: 50%;
  width: auto;
  height: 23px;
  line-height: normal;
  transform: translateX(-50%);
  border: none;
`
const StyledLogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #212121;
  font-size: 23px;
  &:hover {
    border: none;
    text-decoration: none;
  }
`
const Logo = ({ title = 'FERuden' }) => (
  <StyledLogo>
    <StyledLogoLink to="/">{title}</StyledLogoLink>
  </StyledLogo>
)

export default Logo
