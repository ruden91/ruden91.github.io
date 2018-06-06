import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './blog-post.scss'
import Highlight from 'react-highlight'
import Img from 'gatsby-image'
import './highlight.css'
import { DiscussionEmbed } from 'disqus-react'
import moment from 'moment'
import 'moment/locale/ko'
import styled from 'styled-components'

const StyledBlogPost = styled.div`
  ul {
    padding-left: 20px;
    li {
      list-style: initial;
      margin-bottom: 15px;
    }
  }
  p {
    line-height: 23px;
  }
`
const StyledHeadLine = styled.h1`
  color: #454545;
  font-weight: 400;
  border: none;
  margin-bottom: 10px;
`
const StyledImageContainer = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
  max-height: 400px;
`
const StyledSubLine = styled.div`
  margin-bottom: 20px;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

const StyledTime = styled.small`
  color: #999;
  float: left;
`
const StyledCategories = styled.small`
  color: #999;
  float: right;
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const pathName = `blog/${this.props.pathContext.slug}`
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const disqusShortname = 'https-ruden91-github-io'
    const disqusConfig = {
      identifier: post.id,
      title: post.title,
    }

    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/${pathName}`} />
        </Helmet>
        <SEO postPath={pathName} postNode={post} postSEO />
        <StyledBlogPost className="blog-container">
          <StyledHeadLine className="section-headline">
            {post.title}
          </StyledHeadLine>
          <StyledSubLine>
            <StyledTime
              style={{
                display: 'block',
              }}
            >
              {moment(post.publishDate).format('YYYY-MM-DD')} ({moment(
                post.publishDate
              ).fromNow()})
            </StyledTime>
            <StyledCategories>{post.categories.join(', ')}</StyledCategories>
          </StyledSubLine>

          <StyledImageContainer>
            <Img sizes={post.heroImage.sizes} alt={post.title} />
          </StyledImageContainer>
          <Highlight innerHTML={true} language="javascript">
            {post.body.childMarkdownRemark.html}
          </Highlight>
        </StyledBlogPost>
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
      tags
      categories
      publishDate
      heroImage {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
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
