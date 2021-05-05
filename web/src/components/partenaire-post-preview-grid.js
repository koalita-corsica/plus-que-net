import {Link} from 'gatsby'
import React from 'react'
import PartenairePostPreview from './partenaire-post-preview'
import {getPartenaireUrl} from '../lib/helpers'

import styles from './blog-post-preview-grid.module.css'

function PartenairePostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{props.title}</h2>
      <div className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <React.Fragment>
              <div key={node.id} className={styles.article}>
                <Link to={getPartenaireUrl(node.publishedAt, node.slug.current)}>
                  <PartenairePostPreview {...node} />
                </Link>
              </div>
            </React.Fragment>
          ))}
      </div>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

PartenairePostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default PartenairePostPreviewGrid
