'use strict'
import React, { Component } from 'react'
import axios from 'axios'
import './UserCard.scss'

export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.apiRoot = 'https://api.github.com/users'
    this.state = {}

    this.fetchGithubData = this.fetchGithubData.bind(this)
  }

  componentDidMount() {
    this.fetchGithubData()
  }

  async fetchGithubData() {
    try {
      let address = `${this.apiRoot}/${this.props.username}`
      if (this.props.clientId && this.props.clientSecret) {
        address += `?client_id=${this.props.clientId}&client_secret=${
          this.props.clientSecret
        }`
      }
      const response = await axios(address)
      const user = await response.data

      this.setState({ user })
    } catch (err) {
      console.error(err.message)
    }
  }

  render() {
    if (this.state.user) {
      const { username } = this.props
      const avatar_url = this.state.user.avatar_url
      const profileUrl = this.state.user.html_url
      const gistUrl = `https://gist.github.com/${username}`
      const followersUrl = `${profileUrl}/followers`
      const repositoriesUrl = `${profileUrl}/repositories`

      return (
        <div className="default-theme">
          <div className="github-card user-card">
            <div className="header" />
            <a className="avatar" href={profileUrl}>
              <img src={avatar_url} alt={username} />
            </a>
            <div className="github-card-content">
              <strong>{this.state.user.name}</strong>
              <span>@{username}</span>
            </div>
            {/* <a className="button" href={profileUrl}>Follow</a>             */}
            <ul className="status">
              <li>
                <a href={repositoriesUrl}>
                  <strong>{this.state.user.public_repos} </strong>Repos
                </a>
              </li>
              <li>
                <a href={gistUrl}>
                  <strong>{this.state.user.public_gists} </strong>Gist
                </a>
              </li>
              <li>
                <a href={followersUrl}>
                  <strong>{this.state.user.followers} </strong>Followers
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}
