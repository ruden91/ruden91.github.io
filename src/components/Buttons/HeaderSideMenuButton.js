import React from 'react'
import styled from 'styled-components'

const StyledSideMenuButton = styled.button`
  padding: 25px 0;
  &:hover {
    span {
      color: #64686a;
      &:after {
        left: 0;
      }
    }
  }
`
const StyledSideMenuBars = styled.span`
  position: relative;
  display: inline-block;
  top: -1px;
  margin-right: 10px;
  vertical-align: middle;
  width: 15px;
  height: 13px;
  transition: all 0.3s ease-in-out;
`
const StyledSideMenuTitle = styled.span`
  display: ${props => (props.isMobile ? 'none' : 'inline-block')};
`
const StyledSideMenuBar = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #202121;
  border-radius: 2px;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #a6abab;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 1;
    transition: 0.3s;
  }
  &:nth-of-type(1) {
    top: 0;

    &:after {
      transition-delay: 0.1s;
    }
  }
  &:nth-of-type(2) {
    top: 4px;

    &:after {
      transition-delay: 0.2s;
    }
  }
  &:nth-of-type(3) {
    top: 8px;
    &:after {
      transition-delay: 0.3s;
    }
  }
`
const SearchButton = ({ onOpenSidebar, isMobile }) => (
  <StyledSideMenuButton onClick={onOpenSidebar}>
    <StyledSideMenuBars>
      <StyledSideMenuBar />
      <StyledSideMenuBar />
      <StyledSideMenuBar />
    </StyledSideMenuBars>
    <StyledSideMenuTitle isMobile={isMobile}>MENU</StyledSideMenuTitle>
  </StyledSideMenuButton>
)

export default SearchButton
