import React, { Component } from 'react'
// import Logo from './logo'
import Link from 'gatsby-link'
import './Header.scss'
import classnames from 'classnames'
export default class header extends Component {
  constructor() {
    super()
    this.state = {
      toggleRotate: false,
    }
  }

  handleSearchButton = () => {
    console.log('????')
    this.setState({
      toggleRotate: !this.state.toggleRotate,
    })
  }

  render() {
    const { toggleRotate } = this.state
    const { onOpenSidebar } = this.props
    const headerClass = classnames({
      'is-rotate': toggleRotate,
    })
    console.log(headerClass)
    return (
      <header>
        <div className={`box-rotate ${headerClass}`}>
          <div className="front">
            <div className="header__left-box">
              <button onClick={onOpenSidebar}>
                <span className="ico-menu">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="menu-text">MENU</span>
              </button>
            </div>
            <div className="logo-header">
              <Link to="/">FERuden</Link>
            </div>
            <div className="header__right-box">
              <button className="header__view-showcase-button">showcase</button>
              <button
                onClick={this.handleSearchButton}
                className="header__search-button"
              >
                <span />
              </button>
            </div>
          </div>
          <div className="bottom">
            <input type="text" placeholder="검색어를 입력해 주세요" />
            <button
              onClick={this.handleSearchButton}
              className="close-search"
            />
          </div>
        </div>
        <article className="search-result">
          <ul>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
            <li>asdfklnfnlksfkldsnfklasnfkldasnfklds</li>
          </ul>
        </article>
      </header>
    )
  }
}
