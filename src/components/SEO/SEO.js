import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../../data/SiteConfig'

export default class SEO extends Component {
  render() {
    console.log(config)
    console.log(this.props)
    let title = config.siteTitle
    let description = config.siteDescription
    let image = 'test'

    const schemaOrgJSONLD = [
      {
        '@context': 'https://ruden91.github.io',
        '@type': 'WebSite',
        // url: blogURL,
        name: title,
        // alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        {/* <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null} */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''}
        /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}
