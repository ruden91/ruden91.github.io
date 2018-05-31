require('dotenv').config()
const config = require('./data/SiteConfig')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
const ContentfulToAlgolia = require('contentful-to-algolia')
let contentfulConfig

try {
  // contentfulConfig = require('./.contentful')
  contentfulConfig = {
    spaceId: 'hu4faubeotg0',
    accessToken:
      '98beb767cc8236512e0585eb3063ccc48d6e69894845851743a3f60e2a60b358',
  }
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the delivery token need to be provided.'
    )
  }
}

const query = `{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts|pages/[0-9]+.*--/"}}) {
    edges {
      node {
        objectID: fileAbsolutePath
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
        }
      }
    }
  }
}`

const queries = [
  {
    query,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => node),
  },
]

const Sync = new ContentfulToAlgolia({
  algolia: {
    applicationId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
    // indexPrefix: 'dev_', // for Development mode
  },
  contentful: {
    accessToken: contentfulConfig.accessToken,
    space: contentfulConfig.spaceId,
    // host: 'preview.contentful.com', // for Drafts
  },
  locales: [['en-US', 'en'], ['de-DE', 'de']],
})
console.log(Sync)
Sync.sync(['blog_post'], 'gatsby_blog', data => {
  // console.log(data)
  // data.forEach(entry => {
  //   console.log(entry)
  //   // console.log(`Entry ${entry.id} saved.`);
  // })
})

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      // site_url: config.siteUrl + pathPrefix,
      // feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      // image_url: `${config.siteUrl + pathPrefix}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
      searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        : '',
      indexName: process.env.ALGOLIA_INDEX_NAME
        ? process.env.ALGOLIA_INDEX_NAME
        : '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY
          ? process.env.ALGOLIA_ADMIN_API_KEY
          : '',
        indexName: process.env.ALGOLIA_INDEX_NAME
          ? process.env.ALGOLIA_INDEX_NAME
          : '',
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
