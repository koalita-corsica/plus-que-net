import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-last-article.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogLastArticle (props) {
  return (
      <div className={styles.blogContain}>
        <div className={styles.lastArticle}> 
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .url()}
              alt={props.mainImage.alt}
              className={styles.imgLastArticle}
            />
          )}
        <div className={styles.lastArticleContain}>
          <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
          <div className={styles.text}>
            <h3 className={cn(responsiveTitle3, styles.articleTitle)}>{props.title}</h3>
            {props._rawExcerpt && (
              <div className={styles.description}>
                <PortableText blocks={props._rawExcerpt}  />
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
  )
}

export default BlogLastArticle
