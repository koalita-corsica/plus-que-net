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
    nodes {
      title
      mainImage {
        asset {
          url
        }
        alt
      }
      images {
        asset {
          url
        }
      }
    }
  }
}
`

const PrestationPage = props => {
  const {data, errors} = props
  const page = data && data.page;
  const services = data && data.services;
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
        <h1> {page.title} </h1>
        {services.nodes.map((service =>
        <React.Fragment>
          <p> {service.title} </p>
          </React.Fragment>
          ))}
        </Container>
    </Layout>
  )
}

export default PrestationPage
