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

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `FERuden`,
    siteUrl: `https://ruden91.github.io/`,
    description: `프론트엔드 개발지식 나눔 블로그`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
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
