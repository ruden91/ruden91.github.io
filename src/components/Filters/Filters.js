import React, { Component } from 'react'

import Filter from './Filter'
import './Filters.scss'
export default class Filters extends Component {
  mapComponent = () => {
    const { filters, onHandleFilter } = this.props
    return filters.map(filter => (
      <Filter {...filter} key={filter.key} onHandleFilter={onHandleFilter} />
    ))
  }

  render() {
    return (
      <ul className="filter-tabs">
        <li className="filter-tabs__title">Filter By</li>
        {this.mapComponent()}
        <li>S</li>
      </ul>
    )
  }
}
