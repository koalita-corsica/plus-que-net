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
<<<<<<< HEAD
import styles from '../pages/index.module.css'
const Block = require('@sanity/block-content-to-react')
=======
import Block from '@sanity/block-content-to-react'
>>>>>>> 40a77a6eba1bbb8eede7b4a9b110bf7963932bbc



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
            <h1 className={styles.title}>ENTREPRISE DE LAVAGES DE VITRES & GARDE-CORPS</h1>
          </div>
        <Wrapper>
<<<<<<< HEAD
          <div className={styles.BlockContent}>
            <h2 className={styles.subtitle}>L'Histoire de plus que net</h2>
            <div className={styles.bloc1}>
              <p className={styles.paragraphe1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <img src="" alt="img"></img>
            </div>
            <div className={styles.bloc2}>
              <h2 className={styles.subtitle2}>Pourquoi faire appel à nous ?</h2>
              <p className={styles.paragraph2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={styles.bloc3}>
              <h2 className={styles.subtitle3}>Des professionnels à votre service</h2>
              <p className={styles.paragraphe3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
=======
        <h1> {page.title} </h1>
        <Block blocks={page._rawBody} />
        <img src={page.image.asset.url} alt="" /> 
>>>>>>> 40a77a6eba1bbb8eede7b4a9b110bf7963932bbc
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default IndexPage
