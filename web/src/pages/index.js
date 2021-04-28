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

import { isBrowser } from '../lib/utils'; 


export const query = graphql`

  query IndexPageQuery {
  page: sanityPage(slug: {current: {eq: "accueil"}}) {
    id
    title
    _rawBody
    image {
      asset {
        url
      }
    }
  }
}
`

const IndexPage = props => {
  if (!isBrowser) {
    return;
  }

  const {data, errors} = props
  const page = data && data.page;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>Entreprise de lavages de vitres & garde-corps</h1>
        </div>
        <Wrapper>
          <div className={styles.BlockContent}>
            <div className={styles.bloc1}>
              <img className={styles.imgIndex}src={page.image.asset.url} alt="img" ></img>
              <Block blocks={page._rawBody} />
            </div>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default IndexPage
