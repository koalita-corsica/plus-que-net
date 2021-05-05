import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Wrapper from '../components/wrapper'
import styles from '../pages/index.module.css'
import Block from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'
import PortableText from '../components/portableText'

import {isBrowser} from '../lib/utils'

const MentionsLegalesPage = props => {
  if (!isBrowser) {
    return
  }

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>Mentions Legales</h1>
        </div>
      </Container>
    </Layout>
  )
}

export default MentionsLegalesPage
