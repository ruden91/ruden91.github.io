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
      posts: [],
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

  componentDidMount() {
    const posts = this.props.data.allContentfulBlogPost.edges
    this.setState({
      posts,
    })
  }

  render() {
    const { opened, posts } = this.state
    const { location, children } = this.props

    console.log(this.state.posts)
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
          <Header onOpenSidebar={this.openSidebar} posts={posts} />
          {children()}
          <Footer />
        </Sidebar>
      </div>
    )
  }
}

export default Template

export const rootQuery = graphql`
  query RootQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          categories
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
