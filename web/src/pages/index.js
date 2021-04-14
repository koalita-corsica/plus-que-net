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
      </Container>
    </Layout>
  )
}

export default IndexPage
