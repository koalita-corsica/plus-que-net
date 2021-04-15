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
import Block from '@sanity/block-content-to-react'

export const query = graphql`
  query PrestationsPageQuery {
  service: allSanityServices {
    nodes {
      _rawBody
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
  const page = data && data.service;
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
        {page.nodes.map(( contenu => 
        <React.Fragment>
            <h1> {contenu.title} </h1>
            <Block blocks={contenu._rawBody} />
            <img src={contenu.mainImage.asset.url} alt="" width="150" height="150"/>
          </React.Fragment>
        ))}
        </Container>
    </Layout>
  )
}

export default PrestationPage
