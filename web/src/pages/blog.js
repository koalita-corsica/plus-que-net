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

export const query = graphql`
  query BlogPageQuery {
  page: sanityPage(slug: {current: {eq: "blog"}}) {
    id
    title
  }
  posts: allSanityPost(
    sort: { fields: [publishedAt], order: DESC }
    filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
    edges {
      node {
        id
        publishedAt
        mainImage {
            asset{
                _id
            }
            alt
          }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
}
`

const BlogPage = props => {
  const {data, errors} = props
  const page = data && data.page;
  const blogPost = data && data.posts;
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
        <Wrapper>
        <h1> {page.title} </h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewList nodes={postNodes} />}    
        </Wrapper>  
        </Container>
    </Layout>
  )
}

export default BlogPage
