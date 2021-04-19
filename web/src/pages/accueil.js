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

const isBrowser = typeof window !== "undefined"


const IndexPage = props => {
  const {data, errors} = props
  const page = data && data.page;

  let loggedIn = false
  if (isBrowser) {
    window.localstorage.getItem("isLoggedIn") === "true"
  }

  if (typeof window !== `undefined`) {
    const Block = require("@sanity/block-content-to-react")
  }

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
          <h1 className={styles.title}>ENTREPRISE DE LAVAGES DE VITRES & GARDE-CORPS</h1>
        </div>
        <Wrapper>
          <div className={styles.BlockContent}>
            <div className={styles.bloc1}>
            {/* <Block blocks={page._rawBody} /> */}
            <img src={page.image.asset.url} alt="img" width="200" height="250"></img>
            </div>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default IndexPage
