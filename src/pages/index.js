import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './default.scss'
import ArticlePreview from '../components/article-preview'
import Filters from '../components/Filters/Filters'
// import 'devicon/devicon.css'
class RootIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialPosts: [],
      posts: [],
      filters: [
        {
          name: '알고리즘',
          value: 'algorithm',
        },
        {
          name: 'HTML5',
          value: 'html5',
        },
        {
          name: '자바스크립트',
          value: 'javascript',
        },
        {
          name: 'CSS3',
          value: 'css3',
        },
      ],
      filter: '',
    }
  }
  componentDidMount() {
    this.setState({
      initialPosts: this.props.data.allContentfulBlogPost.edges,
      posts: this.props.data.allContentfulBlogPost.edges,
    })
  }
  handleFilterPost = filter => {
    const { initialPosts } = this.state
    const posts = initialPosts.filter(item => {
      return item.node.categories[0] === filter
    })

    this.setState({
      filter,
      posts,
    })
  }

  render() {
    const { transition } = this.props
    const { posts, filters } = this.state
    return (
      <section>
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEO postEdges={posts} />
        <Filters
          filters={this.state.filters}
          onHandleFilter={this.handleFilterPost}
        />
        <div className="container">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.id} className="col-3">
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
