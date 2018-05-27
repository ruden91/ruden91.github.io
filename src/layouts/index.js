import React from 'react'
import Link from 'gatsby-link'
import base from './base.scss'
import Container from '../components/container'
import Header from '../components/Header'
import Sidebar from 'react-side-bar'
import SideMenu from '../components/SideMenu'
class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }

    this.openSidebar = this.openSidebar.bind(this)
    this.closeSidebar = this.closeSidebar.bind(this)
  }

  openSidebar() {
    this.setState({
      opened: true,
    })
  }

  closeSidebar() {
    this.setState({
      opened: false,
    })
  }

  render() {
    const { opened } = this.state
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="wrapper">
        <Sidebar
          bar={<SideMenu onCloseSidebar={this.closeSidebar} />}
          mode="push"
          duration={500}
          opened={opened}
          size={320}
          onOpen={this.openSidebar}
          onClose={this.closeSidebar}
          fx="ease-in-out"
        >
          <Header onOpenSidebar={this.openSidebar} />
          {children()}
        </Sidebar>
      </div>
    )
  }
}

export default Template
