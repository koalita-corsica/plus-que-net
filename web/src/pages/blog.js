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
import WrapperBlog from '../components/wrapperBlog'
import Block from '@sanity/block-content-to-react'

import styles from '../pages/blog.module.css'

import { isBrowser } from '../lib/utils'; 

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
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  function blur(){
    if(data.page.slug.current == "blog"){
      var elements = document.getElementsByClassName('layout-module--wrapper--38yAp');
      elements.classList.add('blur')
      console.log(elements)
      }
    }
  
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
<Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <WrapperBlog>
          {blogPost.edges.map(( dados =>
            <React.Fragment>
              {console.log(dados.node.mainImage.asset.url)}
          <div className={styles.blogContain}>
            <h2 className={styles.allArticle}>Tous les articles</h2>
            <div className={styles.lastArticle}>
              <img  src={dados.node.mainImage.asset.url} alt={dados.node.mainImage.alt} width="389" height="258" className={styles.imgLastArticle}></img>
              <div className={styles.lastArticleContain}>
                <p className={styles.date}> {dados.node.publishedAt} </p>
                <h3 className={styles.articleTitle}> {dados.node.title} </h3>
                <p className={styles.description}> <Block blocks={dados.node._rawExcerpt} /> </p>
              </div>
            </div>      
            <div className={styles.Article}>
              <img src={dados.node.mainImage.asset.url} alt={dados.node.mainImage.alt} width="289" height="169"></img>
              <p className={styles.date}> {dados.node.publishedAt} </p>
              <h3 className={styles.articleTitle}> {dados.node.title} </h3>
              <p className={styles.description}> <Block blocks={dados.node._rawExcerpt} /> </p>
            </div>      
          </div>      
          <aside className={styles.aside}>
            <h3 className={styles.categorie} >Thématique</h3>
            <img src="" width="246" height="163"></img>
          </aside>
          </React.Fragment>
          ))}
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default BlogPage
