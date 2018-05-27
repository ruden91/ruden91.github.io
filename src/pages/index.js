import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import './default.scss'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const metaData = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    console.log(...metaData)
    return (
      <section style={{ background: '#f4f7f6' }} className="container">
        <Helmet {...metaData} />
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
    site {
      siteMetadata {
        title
        siteUrl
        description
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
