import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables'

const StyledFooter = styled.footer`
  position: relative;
  text-align: center;
  background-color: ${colors.brand};
  padding: 2rem 0 5rem;
  line-height: 25px;
  font-size: 12px;
  border-top: 1px solid #ddd;
  margin-top: 50px;
`

const StyledFooterLink = styled.a`
  color: #212121;
`
const Footer = () => (
  <StyledFooter>
    <div className="credit">
      <p>&copy; 2018 Ruden</p>
      <p>
        Powered by
        <StyledFooterLink href="#" target="_blank">
          &nbsp;Gatsby
        </StyledFooterLink>, Theme by
        <StyledFooterLink href="#" target="_blank">
          &nbsp;Ruden
        </StyledFooterLink>
      </p>
    </div>
  </StyledFooter>
)
export default Footer
