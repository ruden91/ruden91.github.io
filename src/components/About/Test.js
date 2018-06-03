import React, { Component } from 'react'
let AOS
if (typeof document !== 'undefined') {
  AOS = require('aos')
}
import classNames from 'classnames'
import { Watch } from 'scrollmonitor-react'
import 'aos/dist/aos.css'
import './Test.scss'

const ViewStyle = props => (
  <div className={props.componentStyle} data-aos={props.aos}>
    <p>{props.children}</p>
  </div>
)
export default Watch(
  class TextComponent extends React.Component {
    componentDidMount() {
      this.aos = AOS
      this.aos.init({
        duration: 2000,
      })
    }
    componentDidUpdate() {
      this.aos.refresh()
    }
    render() {
      const aosClass = classNames({
        'aos-init': true,
        isInViewport: this.props.isInViewport,
      })

      return (
        <span>
          {this.props.isInViewport ? (
            <ViewStyle aos="fade-up" componentStyle={aosClass}>
              {this.props.children}
            </ViewStyle>
          ) : (
            <ViewStyle aos="fade-down" componentStyle={aosClass}>
              {this.props.children}
            </ViewStyle>
          )}
        </span>
      )
    }
  }
)
