import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/locale/ko'
export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <span className="image-wrap">
        <Img sizes={article.heroImage.sizes} alt={article.title} />
      </span>
      <div>
        <h3 className={styles.previewTitle}>{article.title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        <footer>
          <p>
            BY <strong>RUDEN</strong>
          </p>
          <small>
            {moment(article.publishDate).format('YYYY-MM-DD (ddd)')}
          </small>
        </footer>
      </div>
    </Link>
  </div>
)
