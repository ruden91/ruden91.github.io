import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`Resume | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/resume/`} />
        </Helmet>

        <p>Resume</p>
      </div>
    )
  }
}
