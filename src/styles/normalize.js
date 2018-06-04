import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { colors } from 'styles/variables'
injectGlobal`
  ${styledNormalize}

  // Set up a decent box model on the root element
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
      cursor: pointer;
      outline: none;
      background: none;
      border: 0;
      color: inherit;
      font: inherit;
      line-height: normal;
      overflow: visible;
      padding: 0;
      -webkit-appearance: button; 
      -webkit-user-select: none; 
      -moz-user-select: none;
      -ms-user-select: none;

  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${colors.defaultFontColor};
    background-color: ${colors.brand};
  }
  
  .side-bar-panel {
    > div {
      z-index: 2;
    }
  }
`
