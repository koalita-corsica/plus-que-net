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
import WrapperBlog from '../components/wrapperBlog'
import styles from '../pages/partenaire.module.css'
import imgTest from '../images/test.jpg'

import { isBrowser } from '../lib/utils'; 


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
  if (!isBrowser) {
    return;
}
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
            <div className={styles.Article}>
              <img src={imgTest} className={styles.imgArticle}></img>
              <div className={styles.articleContain}>
                <span className={styles.date}>23 mai 2020</span>
                <h3 className={styles.articleTitle}>Article 1 titre</h3>
                <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>
            </div>      
          </div>      
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default PartenairesPage
