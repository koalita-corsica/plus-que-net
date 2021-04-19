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

import { isBrowser } from './utils'; 

if (!isBrowser) {
    return;
}

export const query = graphql`
  query PartenairesPageQuery {
  page: sanityPage(slug: {current: {eq: "partenaires"}}) {
    id
    title
  }
  posts: allSanityPost(filter: {thematiques: {title: {eq: "theme1"}}}) {
    nodes {
      title
      authors {
        author {
          name
        }
      }
      publishedAt
      mainImage {
        asset {
          url
        }
      }
    }
  }
}
`

const PartenairesPage = props => {
  const {data, errors} = props
  const page = data && data.page;
  const posts = data && data.posts;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <Container>
        <h1> {page.title} </h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewList nodes={postNodes} />}      
        </Container>
    </Layout>
  )
}

export default PartenairesPage
