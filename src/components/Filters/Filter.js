import React from 'react'

const Filter = ({ value, name, onHandleFilter }) => (
  <li className="filter-by" onClick={() => onHandleFilter(value)}>
    {name}
  </li>
)

export default Filter
