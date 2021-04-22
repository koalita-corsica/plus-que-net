import React from 'react'
import { graphql } from 'gatsby'
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
import styles from '../pages/blog.module.css'
import imgTest from '../images/test.jpg'
import Block from '@sanity/block-content-to-react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { Link } from 'gatsby'

import { isBrowser } from '../lib/utils'

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
        _id
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

  const { data, errors } = props
  const page = data && data.page;
  const blogPost = data && data.posts;
  const articles = []
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
          {postNodes.forEach(element => {
            articles.push(element)
          })}
          <ul>
            <div className={styles.blogContain}>
              <h2 className={styles.allArticle}>Tous les articles</h2>
              {articles.forEach(element => {
                  <React.Fragment>

                    <div key={element.id} className={styles.lastArticle}>
                      <li key={element.mainImage.asset._id}>
                        <img src={element.mainImage.asset.url} className={styles.imgLastArticle}></img>
                      </li>
                      <div key={element.id} className={styles.lastArticleContain}>
                        <span className={styles.date}> {element.publishedAt} </span>
                        <h3 className={styles.articleTitle}> {element.title} </h3>
                        <span className={styles.description}> {element._rawExcerpt} </span>
                      </div>
                    </div>

                    <div key={element.id} className={styles.Article}>
                      <li key={element.mainImage.asset._id}>
                        <img src={element.mainImage.asset.url} className={styles.imgLastArticle}></img>
                      </li>
                      <div key={element.id} className={styles.lastArticleContain}>
                        <span className={styles.date}> {element.publishedAt} </span>
                        <h3 className={styles.articleTitle}> {element.title} </h3>
                        <span className={styles.description}> {element._rawExcerpt} </span>
                      </div>
                    </div>
                  </React.Fragment>
              })}
            </div>
          </ul>
          <aside className={styles.aside}>
            <h3 className={styles.categorieTitle} >Thématique</h3>
            <div className={styles.categorie}>
              <h2>Thèmes</h2>
            </div>
          </aside>
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default BlogPage


{/* <Layout>
<Container>
  <div className={styles.titleContain}>
    <h1 className={styles.title}>{page.title}</h1>
  </div>
  <WrapperBlog>
    {postNodes.forEach(element => {
      articles.push(element)
    })}
       <React.Fragment>
     <div className={styles.blogContain}>
       <h2 className={styles.allArticle}>Tous les articles</h2>
       <Link to={getBlogUrl(articles[0].publishedAt, articles[0].slug.current)} >
       <div className={styles.lastArticle}>
        <img  src={articles[0].mainImage.asset.url} alt={articles[0].mainImage.alt} width="389" height="258" className={styles.imgLastArticle}></img>
         <div className={styles.lastArticleContain}>
           <p className={styles.date}> {articles[0].publishedAt} </p>
           <h3 className={styles.articleTitle}> {articles[0].title} </h3>
           <p className={styles.description}> <Block blocks={articles[0]._rawExcerpt} /> </p>
         </div>
       </Link>
       {articles.forEach(element => {
        <Link to={getBlogUrl(element.publishedAt, element.slug.current)} >
          <div className={styles.Article}>
            <img src={element.mainImage.asset.url} alt={element.mainImage.alt} width="289" height="169"></img>
            <p className={styles.date}> {element.publishedAt} </p>
            <h3 className={styles.articleTitle}> {element.title} </h3>
            <p className={styles.description}> <Block blocks={element._rawExcerpt} /> </p>
          </div>
        </Link>
       })}
      </div>    */}