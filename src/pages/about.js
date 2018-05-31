import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <SEO />
        <p>About</p>
      </div>
    )
  }
}
