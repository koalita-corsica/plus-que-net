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
  query PrestationsPageQuery {
  page: sanityPage(slug: {current: {eq: "prestations-tarifs"}}) {
    id
    title
  }
  services: allSanityServices {
    edges {
      node {
        title
        mainImage {
          asset {
            url
          }
        }
        images {
          asset {
            url
          }
        }
      }
    }
  }
}
`

const PrestationPage = props => {
  const {data, errors} = props
  const page = data && data.page;
  const service = data && data.services;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const services = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <Container>
        <h1> {page.title} </h1>
        <h4> {service.title} </h4>  
        </Container>
    </Layout>
  )
}

export default PrestationPage
