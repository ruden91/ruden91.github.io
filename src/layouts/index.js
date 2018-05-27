import React from 'react'
import Link from 'gatsby-link'
import base from './base.scss'
import Container from '../components/container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import Sidebar from 'react-side-bar'
class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }
    this.Sidebar
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
          <Footer />
        </Sidebar>
      </div>
    )
  }
}

export default Template
