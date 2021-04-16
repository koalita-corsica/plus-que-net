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
import Galerie from '../components/galerie';

export const query = graphql`
  query PrestationsPageQuery {
  services: allSanityServices {
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
  service: sanityServices(slug: {current: {eq: "service1"}}) {
    title
     images{
       asset {
         fluid {
           src
         }
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
      {JSON.stringify(service.images, null, 2)}
        {page.nodes.map(( contenu => 
        <React.Fragment>
            <h1> {contenu.title} </h1>
            <Block blocks={contenu._rawBody} />
            <img src={contenu.mainImage.asset.url} alt="" width="150" height="150"/>
            <Galerie />
          </React.Fragment>
        ))}
        </Container>
    </Layout>
  )
}

export default PrestationPage
