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
const BlockContent = require('@sanity/block-content-to-react')



export const query = graphql`

  query IndexPageQuery {
  page: sanityPage(slug: {current: {eq: "accueil"}}) {
    id
    title
    authors {
      author {
        name
      }
    }
    body {
      _type
      sanityChildren {
        text
      }
      _key
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
        <Wrapper>
        <h1> {page.title} </h1>
        <BlockContent blocks={page.body} />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default IndexPage
