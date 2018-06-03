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
      content: '',
    }
  }

  handleSearchButton = () => {
    this.setState({
      toggleRotate: !this.state.toggleRotate,
    })
  }

  handleSearchInput = e => {
    console.log(this.props.posts)
    this.setState({
      content: e.target.value,
    })
  }

  mapSearchResultList = () => {
    const { content } = this.state
    const { posts } = this.props
    return posts
      .filter(item => {
        let node = item.node.title.toLowerCase()
        let compare = content.toLowerCase()
        return node.includes(compare)
      })
      .map(item => {
        console.log(item)
        return (
          <li>
            {/* <a href={`/blog/${item.node.slug}`}>{item.node.title}</a> */}
            <Link to={`/blog/${item.node.slug}`}>{item.node.title}</Link>
          </li>
        )
      })
  }

  render() {
    const { toggleRotate } = this.state
    const { onOpenSidebar } = this.props
    console.log('render')
    const headerClass = classnames({
      'is-rotate': toggleRotate,
    })
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
            <input
              onChange={this.handleSearchInput}
              value={this.state.content}
              type="text"
              placeholder="검색어를 입력해 주세요"
            />
            <button
              onClick={this.handleSearchButton}
              className="close-search"
            />
          </div>
        </div>
        {this.state.toggleRotate && (
          <article className="search-result">
            <ul>{this.mapSearchResultList()}</ul>
          </article>
        )}
      </header>
    )
  }
}
