import React, { Component } from 'react'
import ReactImage from 'devicon/icons/react/react-original-wordmark.svg'
import D3Image from 'devicon/icons/d3js/d3js-original.svg'
import WebpackImage from 'devicon/icons/webpack/webpack-original.svg'
import VueImage from 'devicon/icons/vuejs/vuejs-original-wordmark.svg'
import TypescriptImage from 'devicon/icons/typescript/typescript-original.svg'
import SassImage from 'devicon/icons/sass/sass-original.svg'
import NodejsImage from 'devicon/icons/nodejs/nodejs-original.svg'
import LaravelImage from 'devicon/icons/laravel/laravel-plain-wordmark.svg'
import jQueryImage from 'devicon/icons/jquery/jquery-original-wordmark.svg'
import JsImage from 'devicon/icons/javascript/javascript-original.svg'
import HtmlImage from 'devicon/icons/html5/html5-original-wordmark.svg'
import GithubImage from 'devicon/icons/github/github-original-wordmark.svg'
import GitlabImage from 'devicon/icons/gitlab/gitlab-original-wordmark.svg'
import CssImage from 'devicon/icons/css3/css3-original-wordmark.svg'
import HandlebarsImage from 'devicon/icons/handlebars/handlebars-original-wordmark.svg'
export default class TechCube extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { toggleModal, onHandleModal } = this.props
    return (
      <div className="tech-cube">
        <ul>
          <li onClick={() => onHandleModal('ReactJS')}>
            <img src={ReactImage} />
          </li>
          <li onClick={() => onHandleModal('D3')}>
            <img src={D3Image} />
          </li>
          <li onClick={() => onHandleModal('Webpack')}>
            <img src={WebpackImage} />
          </li>
          <li>
            <img src={VueImage} />
          </li>
          <li>
            <img src={TypescriptImage} />
          </li>
          <li>
            <img src={SassImage} />
          </li>
          <li>
            <img src={NodejsImage} />
          </li>
          <li>
            <img src={LaravelImage} />
          </li>
          <li>
            <img src={jQueryImage} />
          </li>
          <li>
            <img src={JsImage} />
          </li>
          <li>
            <img src={HtmlImage} />
          </li>
          <li>
            <img src={GithubImage} />
          </li>
          <li>
            <img src={GitlabImage} />
          </li>
          <li>
            <img src={CssImage} />
          </li>
          <li>
            <img src={HandlebarsImage} />
          </li>
        </ul>
      </div>
    )
  }
}
