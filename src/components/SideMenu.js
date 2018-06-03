import React, { Component } from 'react'
import UserCard from './UserCard'
import Link from 'gatsby-link'
import classNames from 'classnames'

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.path
    this.state = {
      sideItems: [
        {
          home: '/',
        },
        {
          achieve: '/achieve',
        },
        {
          about: '/about',
        },
        {
          resume: '/resume',
        },
      ],
    }
  }
  componentDidMount() {
    this.path = window.location.pathname
  }
  render() {
    const { onCloseSidebar } = this.props
    return (
      <nav className="side-menu">
        <header>
          <div className="pull-left">
            <img
              src="https://www.codewars.com/users/reactorRD/badges/micro"
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
          {this.state.sideItems.map(value => (
            <li
              key={Object.keys(value)[0]}
              className={`${
                value[Object.keys(value)[0]] === this.path ? 'is-active' : ''
              } `}
            >
              <span>
                <Link to={value[Object.keys(value)[0]]}>
                  {Object.keys(value)[0]}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
