import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Wrapper from '../components/wrapper'
import WrapperBlog from '../components/wrapperBlog'
import styles from '../pages/blog.module.css'
import imgTest from '../images/test.jpg'
import Block from '@sanity/block-content-to-react'

import {isBrowser} from '../lib/utils'
import BlogLastArticle from '../components/blog-last-article'
import BlogPostPreview from '../components/blog-post-preview'

export const query = graphql`
  query BlogPageQuery {
  page: sanityPage(slug: {current: {eq: "blog"}}) {
    id
    title
    slug {
      current
    }
  }
  posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}, skip: 1) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          asset {
            _id
            url
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
  lastPost: allSanityPost(
    sort: {fields: [publishedAt], order: DESC},
     filter: {slug: {current: {ne: null}}, 
     publishedAt: {ne: null}}, 
     limit: 1) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          asset {
            _id
            url
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
  if (!isBrowser) {
    return;
  }

  const {data, errors} = props
  const page = data && data.page;
  const blogPost = data && data.posts;
  const items = blogPost.edges
  const lastOne = data && data.lastPost
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const lastNodes = data && data.lastPost && mapEdgesToNodes(data.lastPost)

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <WrapperBlog>
          <div className={styles.blogContain}>
            <h2 className={styles.allArticle}>Tous les articles</h2>
            <div className={styles.lastArticle}>
              {lastNodes && lastNodes.length > 0 && <BlogLastArticle nodes={lastNodes}/>}
            </div>
            <div className={styles.Article}>
              {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}  
            </div>
          </div>
          <aside className={styles.aside}>
            <h3 className={styles.categorie} >Thématique</h3>
            <img src="" width="246" height="163"></img>
          </aside>
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default BlogPage