import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import imgTest from '../images/test.jpg'
import styles from './blog-post.module.css'
import WrapperBlog from './wrapperBlog'
import Layout from '../containers/layout'
import {Link} from 'gatsby'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <Container>
      <div className={styles.titleContain}>
        <h1 className={styles.title}>Blog</h1>
      </div>
      <WrapperBlog>
        <div className={styles.blogContain}>
          <div className={styles.pathContain}>
            <Link to='/blog/'> <h3 className={styles.path}>Tous les Articles</h3> </Link>
            <h3>{'> '}</h3>
            <h3 className={styles.articleTitle}> {title}</h3>
          </div>
          {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .fit('crop')
                .auto('format')
                .url()}
              alt={mainImage.alt}
              className={styles.imgArticle}
            />
          )}
          {publishedAt && (
            <div className={styles.publish}><span>Publié <li /></span>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do, YYYY')}
            </div>
          )}
          <h3 className={styles.subtitle}> {title} </h3>
          <div className={styles.paraWrapper}>
            {props._rawExcerpt && (
              <div className={styles.excerpt}>
                {mainImage && mainImage.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(mainImage))
                      .fit('crop')
                      .auto('format')
                      .url()}
                    alt={mainImage.alt}
                    className={styles.imgPara}
                  />
                )}
                {_rawBody && <PortableText blocks={_rawBody} />}
              </div>
            )}
          </div>
        </div>
        <aside className={styles.aside}>
          <h2 className={styles.categorieTitle} >Thématique</h2>
          <div className={styles.catWrapper}>
            {props.thema.edges.map(element =>
              <div className={styles.categorie}>
                <img src={element.node.image.asset.url} className={styles.imgTheme} />
                <h2> {element.node.title} </h2>
              </div>
            )}
          </div>
        </aside>
      </WrapperBlog>
    </Container>
  )
}

export default BlogPost
