import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables'

const StyledFooter = styled.footer`
  position: relative;
  text-align: center;
  background-color: #fcfcfc;
  padding: 2.5rem 0 8rem;
  line-height: 25px;
  font-size: 12px;
  margin-top: 50px;
`

const StyledFooterLink = styled.a`
  color: #49c5b6;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    text-decoration: none;
  }
`
const Footer = () => (
  <StyledFooter>
    <div className="credit">
      <p>&copy; 2018 Ruden</p>
      <p>
        Powered by
        <StyledFooterLink href="https://www.gatsbyjs.org/" target="_blank">
          &nbsp;Gatsby
        </StyledFooterLink>, Theme by
        <StyledFooterLink href="https://github.com/ruden91" target="_blank">
          &nbsp;Ruden
        </StyledFooterLink>
      </p>
    </div>
  </StyledFooter>
)
export default Footer
