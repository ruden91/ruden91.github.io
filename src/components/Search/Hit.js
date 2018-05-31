import React from 'react'
import Link from 'gatsby-link'

const Hit = props => {
  const { hit } = props
  return <Link to={hit.objectID}>{hit.name}</Link>
}
export default Hit
