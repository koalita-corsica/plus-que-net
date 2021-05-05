import {Link} from 'gatsby'
import React, {useState, useEffect} from 'react'
import BlogPostPreview from './blog-post-preview'
import BlogLastArticle from './blog-last-article'
import {cn, getBlogUrl} from '../lib/helpers'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <div className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <React.Fragment>
              <div key={node.id} className={styles.article}>
                <Link to={getBlogUrl(node.publishedAt, node.slug.current)}>
                  <BlogPostPreview thema={props.thema} {...node} />
                </Link>
              </div>
            </React.Fragment>
          ))}
      </div>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>VOIR PLUS</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
