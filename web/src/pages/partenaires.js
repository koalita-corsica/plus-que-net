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
import WrapperBlog from '../components/wrapperBlog'
import styles from '../pages/partenaire.module.css'
import imgTest from '../images/test.jpg'
import PartenaireLastArticle from '../components/partenaires-last-article'
import PartenairePostPreviewGrid from '../components/partenaire-post-preview-grid'

import {isBrowser} from '../lib/utils'

export const query = graphql`
  query PartenairesPageQuery {
  page: sanityPage(slug: {current: {eq: "partenaires"}}) {
    id
    title
  }
  partenaires: allSanityPartenaire(sort: {fields: [publishedAt], order: DESC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}, skip: 1) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          asset {
            _id
            url
          }
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
  lastPartenaire: allSanityPartenaire(sort: {fields: publishedAt, order: DESC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}, limit: 1,) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          asset {
            _id
            url
          }
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
}
`

const PartenairesPage = props => {
  if (!isBrowser) {
    return
  }
  const {data, errors} = props
  const page = data && data.page
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.partenaires && mapEdgesToNodes(data.partenaires)
  const lastNodes = data && data.lastPartenaire && mapEdgesToNodes(data.lastPartenaire)

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <WrapperBlog>
          <div className={styles.blogContain}>
            <h2 className={styles.allArticle}>Tous les articles</h2>
            <div className={styles.lastArticle}>
              <PartenaireLastArticle nodes={lastNodes} />
            </div>
            <div className={styles.article}>
              {postNodes && postNodes.length > 0 && <PartenairePostPreviewGrid nodes={postNodes} />}
            </div>
          </div>
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default PartenairesPage
