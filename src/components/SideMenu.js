import React, { Component } from 'react'
import UserCard from './UserCard'
import Link from 'gatsby-link'
import classNames from 'classnames'
import styled from 'styled-components'

const StyledNav = styled.nav``

const StyledNavHeader = styled.header`
  height: 70px;
  padding: 0 30px 0 10px;
  line-height: 70px;
  font-size: 13px;
  font-weight: normal;
  background-color: #f4f7f6;
  border-bottom: 1px solid #e6eaea;
  overflow: hidden;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

const StyledNavHeaderLeft = styled.div`
  float: left;
  height: 100%;

  img {
    display: inline-block;
    padding: 26px 0;
  }
`
const StyledNavHeaderRight = styled.div`
  float: right;

  button {
    padding-right: 30px;
    color: #202121;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 33px;
      right: 27px;
      width: 20px;
      height: 3px;
      background: #202121;
      transform: rotate(45deg);
      transition: all 0.3s ease-in-out;
    }
    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.75;
    }
  }
`
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
      <StyledNav>
        <StyledNavHeader>
          <div className="pull-left">
            <img
              src="https://www.codewars.com/users/reactorRD/badges/micro"
              alt="codewars-badge"
            />
          </div>
          <div className="pull-right">
            <button onClick={onCloseSidebar}>CLOSE</button>
          </div>
        </StyledNavHeader>
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
      </StyledNav>
    )
  }
}
