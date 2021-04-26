import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-last-article.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      {/* <div className={styles.blogContain}>
            <h2 className={styles.allArticle}>Tous les articles</h2>
            <div className={styles.lastArticle}>
              <img  src={imgTest}  className={styles.imgLastArticle}></img>
                <div className={styles.lastArticleContain}>
                  <span className={styles.date}>23 juin 2020</span>
                    <h3 className={styles.articleTitle}>Last article title</h3>
                  <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </div>     */}
      <div className={styles.blogContain}>
        <h2 className={styles.allArticle}>Tous les articles</h2>
        <div className={styles.lastArticle}> 
        {/* <div className={styles.leadMediaThumb}> */}
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
    </Link>
  )
}

export default BlogPostPreview
