import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import BlogPostPreview from './blog-post-preview'
import Block from '@sanity/block-content-to-react'

import styles from './blog-last-article.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogLastArticle (props) {
  return (
    <div className={styles.root}>
    {props.title && <h2 className={styles.headline}>{props.title}</h2>}
    <ul className={styles.grid}>
      {props.nodes &&
        props.nodes.map(node => (
          console.log(node),
          <React.Fragment>
            <div key={node.id} className={styles.lastArticle}>
            <Link to={getBlogUrl(node.publishedAt, node.slug.current)}>
            <img  src={node.mainImage.asset.url}  className={styles.imgLastArticle} width="400" height="400"></img>
                <div className={styles.lastArticleContain}>
                  <span className={styles.date}> {format(node.publishedAt, 'MMMM Do, YYYY')} </span>
                    <h3 className={styles.articleTitle}> {node.title} </h3>
                  <span className={styles.description}> <Block block={node._rawExcerpt}/> </span>
                </div>
              </Link>
            </div>
          </React.Fragment>
        ))}
    </ul>
    {props.browseMoreHref && (
      <div className={styles.browseMoreNav}>
        <Link to={props.browseMoreHref}>Browse more</Link>
      </div>
            
    )}
  </div>
  )
}

export default BlogLastArticle
