import React, { Component } from 'react'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Pagination,
} from 'react-instantsearch/dom'

import Hit from '../components/Search/Hit'
export default class Search extends Component {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { algolia },
        },
      },
    } = this.props

    return (
      <div>
        {algolia &&
          algolia.appId && (
            <InstantSearch
              appId={algolia.appId}
              apiKey={algolia.searchOnlyApiKey}
              indexName={algolia.indexName}
            >
              <SearchBox translations={{ placeholder: 'Search' }} />
              <Stats />
              <Hits hitComponent={Hit} />
              <Pagination />
            </InstantSearch>
          )}
      </div>
    )
  }
}

export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`
