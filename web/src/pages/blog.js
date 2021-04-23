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

export const query = graphql`
  query BlogPageQuery {
  page: sanityPage(slug: {current: {eq: "blog"}}) {
    id
    title
    slug {
      current
    }
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
  const articles = items.node
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
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <WrapperBlog>
          <div className={styles.blogContain}>
            <h2 className={styles.allArticle}>Tous les articles</h2>
            <div className={styles.lastArticle}>
              <img  src={imgTest}  className={styles.imgLastArticle}></img>
                <div className={styles.lastArticleContain}>
                  <span className={styles.date}>23 juin 2020</span>
                    <h3 className={styles.articleTitle}>Last article title</h3>
                  <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </div>      
            <div className={styles.Article}>
              <img src={imgTest} className={styles.imgArticle}></img>
              <div className={styles.articleContain}>
                <span className={styles.date}>23 mai 2020</span>
                <h3 className={styles.articleTitle}>Article 1 titre</h3>
                <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>
            </div>
            <div className={styles.Article}>
              <img src={imgTest} className={styles.imgArticle}></img>
              <div className={styles.articleContain}>
                <span className={styles.date}>23 mai 2020</span>
                <h3 className={styles.articleTitle}>Article 1 titre</h3>
                <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>
            </div>
            <div className={styles.Article}>
              <img src={imgTest} className={styles.imgArticle}></img>
              <div className={styles.articleContain}>
                <span className={styles.date}>23 mai 2020</span>
                <h3 className={styles.articleTitle}>Article 1 titre</h3>
                <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>
            </div>
            <div className={styles.Article}>
              <img src={imgTest} className={styles.imgArticle}></img>
              <div className={styles.articleContain}>
                <span className={styles.date}>23 mai 2020</span>
                <h3 className={styles.articleTitle}>Article 1 titre</h3>
                <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>
            </div>
            <div className={styles.Article}>
              <img src={imgTest} className={styles.imgArticle}></img>
              <div className={styles.articleContain}>
                <span className={styles.date}>23 mai 2020</span>
                <h3 className={styles.articleTitle}>Article 1 titre</h3>
                <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>
            </div>  
 
          </div>      
          <aside className={styles.aside}>
            <h2 className={styles.categorieTitle} >Thématique</h2>
            <div className={styles.catWrapper}>
              <div className={styles.categorie}>
                <h2>Thèmes</h2>
              </div>
              <div className={styles.categorie}>
                <h2>Thèmes</h2>
              </div>
              <div className={styles.categorie}>
                <h2>Thèmes</h2>
              </div>
            </div>
          </aside>
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default BlogPage