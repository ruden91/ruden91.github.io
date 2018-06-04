import React from 'react'
import styled from 'styled-components'
const StyledCloseButton = styled.button`
  width: 70px;
  float: right;
  position: relative;
  padding: 0 35px;
  background-color: #212121;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  border: none;
  height: 100%;
  transition: all 0.3s ease;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 3px;
    background: #f4f7f6;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    opacity: 0.75;
  }
`

const SearchButton = ({ onHandleSearchButton }) => (
  <StyledCloseButton onClick={onHandleSearchButton} />
)

export default SearchButton
