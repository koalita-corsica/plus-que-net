import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

import styles from './galerie.module.css'



export const query = graphql`
query {
  allSanityServices {
    edges {
      node {
        id
        images {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}
`

const Galerie= props => {
  const {data, errors} = props
  const service = data && data.service;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
      <React.Fragment>
          <pre> {JSON.stringify(service, null, 2)} </pre>
        <div className={styles.backg}>
            <h1> lol </h1>
            <div className={styles.mainImg}>
                <img id="mainImg" src="https://via.placeholder.com/676x348" alt="img" />
            </div>
            <div className={styles.show}>
                <a href="#slide-1">
                    <div className={styles.slide1} id="slide1">
                        <img src="https://via.placeholder.com/676x348" alt="img" />
                    </div>
                </a>
                <a href="#slide-2">
                    <div className={styles.slide2} id="slide2">
                        <img src="https://via.placeholder.com/676x348" alt="img" />
                    </div>
                </a>
                <a href="#slide-3">
                    <div className={styles.slide3} id="slide3">
                        <img src="https://via.placeholder.com/676x348" alt="img" />
                    </div>
                </a>
                <a href="#slide-4">
                 <div className={styles.slide4} id="slide4">
                    <img src="https://via.placeholder.com/676x348" alt="img" />
                </div>
                </a>
                <a href="#slide-5">
                    <div className={styles.slide5}>
                        <img src="https://via.placeholder.com/676x340" alt="img" />
                    </div>
                </a>
            </div>
            <a className={styles.prev}>&#10094;</a>
            <a className={styles.next}>&#10095;</a>
        </div>
    </React.Fragment>
  )
}

export default Galerie
