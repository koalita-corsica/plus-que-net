import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'
import WrapperBlog from '../components/wrapperBlog'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      mainImage {
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}

      {errors && (
        <Container>
          <div className={styles.titleContain}>
            <h1 className={styles.title}>{page.title}</h1>
          </div>
          <WrapperBlog>
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
          </WrapperBlog>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate