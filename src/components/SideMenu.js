import React, { Component } from 'react'
import UserCard from './UserCard'
import Link from 'gatsby-link'

export default class SideMenu extends Component {
  render() {
    const { onCloseSidebar } = this.props
    return (
      <nav className="side-menu">
        <header>
          <div className="pull-left">
            <img
              src="https://www.codewars.com/users/ruden91/badges/micro"
              alt="codewars-badge"
            />
          </div>
          <div className="pull-right">
            <button onClick={onCloseSidebar}>CLOSE</button>
          </div>
        </header>
        <ul>
          <li>
            <UserCard username="ruden91" />
          </li>
          <li>
            <span>
              <Link to="/">HOME</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/blog">BLOG</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/about">ABOUT</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/resume">RESUME</Link>
            </span>
          </li>
          <li>
            <span>Professional directory</span>
          </li>
          <li>
            <span>Jobs & Talent</span>
          </li>
          <li>
            <span>Magazine</span>
          </li>
          <li>
            <span>eBooks & Publications</span>
          </li>
        </ul>
      </nav>
    )
  }
}
