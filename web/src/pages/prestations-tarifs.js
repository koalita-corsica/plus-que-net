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
import Galerie from '../components/gallery';
import {Link} from 'gatsby'
import { navigate } from "gatsby"

export const query = graphql`
  query PrestationsPageQuery {
  services: allSanityServices {
    nodes {
      id
      _rawBody
      title
      mainImage {
        asset {
          url
        }
        alt
      }
      images{
        _key
        asset {
          _id
          assetId
          _key
            url
        }
      }
    }
  }
  service: sanityServices(slug: {current: {eq: "service1"}}) {
    title
     images{
       asset {
           url
       }
     }
   }
}
`

const PrestationPage = props => {
  const {data, errors} = props
  const page = data && data.services;
  const service = data && data.service;


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
        <React.Fragment>
          {/* <Galerie /> */}
        </React.Fragment>
        </Container>
    </Layout>
  )
}

export default PrestationPage
