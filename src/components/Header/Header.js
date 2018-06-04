import React, { Component } from 'react'

import styled from 'styled-components'
import ShowCaseButton from 'components/Buttons/ShowCaseButton'
import SearchButton from 'components/Buttons/SearchButton'
import HeaderSideMenuButton from 'components/Buttons/HeaderSideMenuButton'
import CloseButton from 'components/Buttons/CloseButton'
import Logo from 'components/Logo'
import SearchInput from 'components/Search/SearchInput'

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e6eaea;
`
const StyledRotate = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  transform: ${props =>
    props.toggleRotate
      ? `translateZ(-100px) rotateX(89deg)`
      : `translateZ(-35px)`};
`
const StyledLeftSideHolder = styled.div`
  float: left;
  min-width: 115px;
  height: 70px;
  padding: 0 23px;
  border-right: 1px solid #e6eaea;
  color: #202121;
  cursor: pointer;
  overflow: hidden;

  > div {
    width: 100%;
    height: $boxheight;
    position: relative;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 70px/2);
  }
`

const StyledRightSideHolder = styled.div`
  float: right;
`

const StyledFront = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
  z-index: 2;
  transform: rotateY(0deg) translateZ(52px);
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`
const StyledBack = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
  z-index: 2;
  transform: rotateX(-90deg) translateZ(-30px);
`
export default class header extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      toggleRotate,
      onOpenSidebar,
      onHandleSearchInput,
      content,
      onHandleSearchButton,
    } = this.props

    return (
      <StyledHeader>
        <StyledRotate toggleRotate={toggleRotate}>
          <StyledFront>
            <StyledLeftSideHolder>
              <HeaderSideMenuButton onOpenSidebar={onOpenSidebar} />
            </StyledLeftSideHolder>
            <Logo />
            <StyledRightSideHolder>
              <ShowCaseButton />
              <SearchButton onHandleSearchButton={onHandleSearchButton} />
            </StyledRightSideHolder>
          </StyledFront>
          <StyledBack>
            <SearchInput
              content={content}
              onHandleSearchInput={onHandleSearchInput}
            />
            <CloseButton onHandleSearchButton={onHandleSearchButton} />
          </StyledBack>
        </StyledRotate>
      </StyledHeader>
    )
  }
}
