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
    slug{
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
      {window.onload=blur}
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
          <aside className={styles.aside}>
            <h3 className={styles.categorieTitle} >Thématique</h3>
            <div className={styles.categorie}>
              <h2 className={styles.catTitle}>titre 1</h2>
            </div>
            <div className={styles.categorie}>
            <h2 className={styles.catTitle}>titre 1</h2>
            </div>
            <div className={styles.categorie}>
            <h2 className={styles.catTitle}>titre 1</h2>
            </div>
          </aside>
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default BlogPage
