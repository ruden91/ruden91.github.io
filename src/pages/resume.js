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
        <div style={{ height: 1500 }} />
        <Test>
          <img src={ReactImage} />
        </Test>
        <div style={{ height: 1500 }} />
        <Test>
          <p>hello~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        </Test>
      </div>
    )
  }
}
