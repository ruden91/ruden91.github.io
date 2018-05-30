import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>

        <p>About</p>
      </div>
    )
  }
}
