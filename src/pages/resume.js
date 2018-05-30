import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="resume" />
        <p>Resume</p>
      </div>
    )
  }
}
