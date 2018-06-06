import React from 'react'
import styled from 'styled-components'

const StyledShowCaseButton = styled.button`
  display: ${props => (props.isMobile ? 'none' : 'block')}
  float: right;
  position: relative;
  padding: 0 35px;
  height: 70px;
  background-color: #49c5b6;
  color: #212121;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #42ab9e;
  }
`

const ShowCaseButton = ({ isMobile }) => (
  <StyledShowCaseButton isMobile={isMobile}>showcase</StyledShowCaseButton>
)

export default ShowCaseButton
