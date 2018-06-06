// @flow
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { colors } from 'styles/variables'
injectGlobal`
  ${styledNormalize}

  // Set up a decent box model on the root element
  html {
    box-sizing: border-box;
  }
  
  body {
    overflow-y: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400
    color: #454545;
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
  label {
    font-size: 0;
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

  .image-wrap {
    height: 256px;

    img {
      height: 100%;
    }

    div {
      height: 100%;
    }
  }
  .side-bar-content {
    height: 100vh;
  }
  #disqus_thread {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
  }
`
