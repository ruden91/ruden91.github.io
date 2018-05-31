import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './default.scss'
import ArticlePreview from '../components/article-preview'
// import 'devicon/devicon.css'
class RootIndex extends React.Component {
  render() {
    const { transition } = this.props

    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <section style={transition && transition.style} className="container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEO postEdges={posts} />
        <div>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug} className="col-3">
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

    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
