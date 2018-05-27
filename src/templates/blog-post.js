import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './blog-post.scss'
import Highlight from 'react-highlight'
import './highlight.css'
import { DiscussionEmbed } from 'disqus-react'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const disqusShortname = 'https-ruden91-github-io'
    const disqusConfig = {
      identifier: post.id,
      title: post.title,
    }
    console.log(post)
    return (
      <div>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="blog-container">
          <div className="image-wrap">
            <img
              src={`${post.heroImage.file.url}?w=1180&h=400&fit=fill`}
              alt=""
            />
          </div>
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>

          <Highlight innerHTML={true} language="javascript">
            {post.body.childMarkdownRemark.html}
          </Highlight>
        </div>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      id
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
