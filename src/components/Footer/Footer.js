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
`
const Footer = () => (
  <StyledFooter>
    <div className="credit">
      <p>&copy; 2018 Ruden</p>
      <p>
        Powered by
        <a href="#" target="_blank">
          &nbsp;Gatsby
        </a>, Theme by
        <a href="#" target="_blank">
          &nbsp;Ruden
        </a>
      </p>
    </div>
  </StyledFooter>
)
export default Footer
