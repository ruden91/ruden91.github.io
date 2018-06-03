import React, { Component } from 'react'
import TechCube from './TechCube'
// import WebpackImage from 'devicon/icons/webpack/webpack-original.svg'
import Test from './Test'
import classNames from 'classnames'
import './About.scss'
import { ReactJS, D3, Webpack } from './Tech'
const sampleData = [
  'ReactJS',
  'D3',
  'Webpack',
  'Vue',
  'Typescript',
  'Sass',
  'NodeJs',
  'Laravel',
  'JQuery',
  'Javascript',
  'Html5',
  'Github',
  'Gitlab',
  'Css3',
  'Handlebars',
]

export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleModal: false,
      width: 0,
      height: 0,
      techData: sampleData,
      dynamicTagName: '',
    }
  }
  components = {
    ReactJS,
    D3,
    Webpack,
  }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  handleModal = componentName => {
    if (typeof componentName !== 'string') {
      componentName = ''
    }
    this.setState({
      toggleModal: !this.state.toggleModal,
      dynamicTagName: componentName,
    })
  }

  handleDynamicComponent = componentName => {
    if (!this.components.hasOwnProperty(componentName)) {
      return
    }

    this.setState({
      dynamicTagName: componentName,
    })
  }
  renderDynamicComponentTag = () => {
    if (!this.state.dynamicTagName) {
      return
    }
    const TagName = this.components[this.state.dynamicTagName]
    return <TagName />
  }
  render() {
    const { height, toggleModal, techData, dynamicTagName } = this.state
    const techCubeClass = classNames({
      'open-preview': toggleModal,
      'about-modal': true,
    })
    return (
      <div className="about">
        <article style={{ height: height - 60 }}>
          <h2>About About About About About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
        <article style={{ height }}>
          <div className="inner">
            <Test>
              <TechCube
                onHandleModal={this.handleModal}
                toggleModal={toggleModal}
              />
            </Test>
          </div>
        </article>
        {/* <article style={{ height }}>
          <Test>
            <TechCube />
          </Test>
        </article> */}
        <div className={techCubeClass}>
          <div className="overlay-content">
            <ul className="left-side">
              {techData.map(item => (
                <li onClick={() => this.handleDynamicComponent(item)}>
                  {item}
                </li>
              ))}
            </ul>
            <div>
              {this.state.dynamicTagName && this.renderDynamicComponentTag()}
              <button onClick={this.handleModal}>X</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
