import React, {useState} from 'react'
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
import { faZhihu } from '@fortawesome/free-brands-svg-icons'

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
        thematiques {
          slug
        }
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
  posts1: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {thematiques: {slug: {eq: "theme1"}}}, skip: 1) {
    edges {
      node {
        thematiques {
          slug
        }
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
  posts2: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {thematiques: {slug: {eq: "theme2"}}}, skip: 1) {
    edges {
      node {
        thematiques {
          slug
        }
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
  posts3: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {thematiques: {slug: {eq: "theme3"}}}, skip: 1) {
    edges {
      node {
        thematiques {
          slug
        }
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
  posts4: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {thematiques: {slug: {eq: "theme4"}}}, skip: 1) {
    edges {
      node {
        thematiques {
          slug
        }
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
  posts5: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {thematiques: {slug: {eq: "theme5"}}}, skip: 1) {
    edges {
      node {
        thematiques {
          slug
        }
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
  lastPost1: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {publishedAt: {ne: null}, thematiques: {slug: {eq: "theme1"}}}, limit: 1) {
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
  lastPost2: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {publishedAt: {ne: null}, thematiques: {slug: {eq: "theme2"}}}, limit: 1) {
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
  lastPost3: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {publishedAt: {ne: null}, thematiques: {slug: {eq: "theme3"}}}, limit: 1) {
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
  lastPost4: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {publishedAt: {ne: null}, thematiques: {slug: {eq: "theme4"}}}, limit: 1) {
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
  lastPost5: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {publishedAt: {ne: null}, thematiques: {slug: {eq: "theme5"}}}, limit: 1) {
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
  thematiques: allSanityThematiques {
    edges {
      node {
        id
        title
        slug
        image {
          asset {
            url
            id
          }
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
  const thematique = data && data.thematiques

  console.log(blogPost)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const [theme, setTheme] = useState("none")
  
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const lastNodes = data && data.lastPost && mapEdgesToNodes(data.lastPost)
  const theme1Last = data && data.lastPost1 && mapEdgesToNodes(data.lastPost1)
  const theme2Last = data && data.lastPost2 && mapEdgesToNodes(data.lastPost2)
  const theme3Last = data && data.lastPost3 && mapEdgesToNodes(data.lastPost3)
  const theme4Last = data && data.lastPost4 && mapEdgesToNodes(data.lastPost4)
  const theme5Last = data && data.lastPos5 && mapEdgesToNodes(data.lastPost5)
  const theme1All = data && data.posts1 && mapEdgesToNodes(data.posts1)
  const theme2All = data && data.posts1 && mapEdgesToNodes(data.posts1)
  const theme3All = data && data.posts1 && mapEdgesToNodes(data.posts1)
  const theme4All = data && data.posts1 && mapEdgesToNodes(data.posts1)
  const theme5All = data && data.posts1 && mapEdgesToNodes(data.posts1)

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <WrapperBlog>
          <div className={styles.blogContain}>
            <h2 onClick={() => setTheme("none")} className={styles.allArticle}>Tous les articles</h2>
            <div className={styles.lastArticle}>
            {theme === "none" ? postNodes && postNodes.length > 0 && <BlogLastArticle nodes={lastNodes} /> : ""}
              {theme === "theme1" ? postNodes && postNodes.length > 0 && <BlogLastArticle nodes={theme1Last} /> : ""}  
              {theme === "theme2" ? postNodes && postNodes.length > 0 && <BlogLastArticle nodes={theme2Last} />  : ""} 
              {theme === "theme3" ? postNodes && postNodes.length > 0 && <BlogLastArticle nodes={theme3Last} /> : ""} 
              {theme === "theme4" ? postNodes && postNodes.length > 0 && <BlogLastArticle nodes={theme4Last} /> : ""} 
              {theme === "theme5" ? postNodes && postNodes.length > 0 && <BlogLastArticle nodes={theme5Last} /> : ""} 
            </div>
            <div className={styles.article}>
              {theme === "none" ? postNodes && postNodes.length > 0 && <BlogPostPreviewGrid thema={thematique} nodes={postNodes} /> : ""}
              {theme === "theme1" ? postNodes && postNodes.length > 0 && <BlogPostPreviewGrid thema={thematique} nodes={theme1All} /> : ""}  
              {theme === "theme2" ? postNodes && postNodes.length > 0 && <BlogPostPreviewGrid thema={thematique} nodes={theme2All} /> : ""} 
              {theme === "theme3" ? postNodes && postNodes.length > 0 && <BlogPostPreviewGrid thema={thematique} nodes={theme3All} /> : ""} 
              {theme === "theme4" ? postNodes && postNodes.length > 0 && <BlogPostPreviewGrid thema={thematique} nodes={theme4All} /> : ""} 
              {theme === "theme5" ? postNodes && postNodes.length > 0 && <BlogPostPreviewGrid thema={thematique} nodes={theme5All} /> : ""} 
            </div>
          </div>
          <aside className={styles.aside}>
          <h2 className={styles.categorieTitle} >Thématique</h2>
          <div className={styles.catWrapper}>
            {thematique.edges.map(element =>
            <div onClick={() => setTheme(element.node.slug)} className={styles.categorie}>
              <img onClick={() => setTheme(element.node.slug)}  src={element.node.image.asset.url} className={styles.imgTheme}></img>
              <h2 onClick={() => setTheme(element.node.slug)}> {element.node.title} </h2>
            </div>
            )}
          </div>
        </aside>
        </WrapperBlog>
      </Container>
    </Layout>
  )
}

export default BlogPage