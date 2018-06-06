import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'

class AchieveIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <section className="container">
        <Helmet title={siteTitle} />
        <div>
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

export default AchieveIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          publishDate
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
