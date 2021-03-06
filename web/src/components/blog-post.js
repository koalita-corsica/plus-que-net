import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from '@sanity/block-content-to-react'
import Container from './container'
import AuthorList from './author-list'
import imgTest from '../images/test.jpg'
import styles from './blog-post.module.css'
import WrapperBlog from './wrapperBlog'
import Layout from '../containers/layout'
import {Link} from 'gatsby'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const serializers = {
  types: {
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }
  }
}

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt, vide} = props
  console.log(vide)
  return (
    <Container>
      <div className={styles.titleContain}>
        <h1 className={styles.title}>Blog</h1>
      </div>
      <WrapperBlog>
        <div className={styles.pathContain}>
          <Link to='/blog/'>
            {' '}
            <h2 className={styles.path}>Tous les Articles</h2>{' '}
          </Link>
          <h2>{'> '}</h2>
          <h2 className={styles.articleTitle}> {title}</h2>
        </div>
        <h2 className={styles.categorieTitle}>Thématique</h2>
        <div className={styles.blogContain}>
          {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage)).fit('crop').auto('format').url()}
              alt={mainImage.alt}
              className={styles.imgArticle}
            />
          )}
          {publishedAt && (
            <div className={styles.publish}>
              <span>Publié •</span>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do, YYYY')}
            </div>
          )}
          <h3 className={styles.subtitle}> {title} </h3>
          <div className={styles.paraWrapper}>
            {props._rawExcerpt && (
              <React.Fragment>
                <div className={styles.excerpt}>
                  {mainImage && mainImage.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(mainImage)).fit('crop').auto('format').url()}
                      alt={mainImage.alt}
                      className={styles.imgPara}
                    />
                  )}
                </div>
                <div className={styles.para1}>{_rawBody && <PortableText blocks={_rawBody} serializers={serializers} />}</div>
              </React.Fragment>
            )}
          </div>
          <h1> HI </h1>
        </div>
        <aside className={styles.aside}>
          <div className={styles.catWrapper}>
            {props.thema.edges.map((element) => (
              <div className={styles.categorie}>
                <img src={element.node.image.asset.url} className={styles.imgTheme} />
                <h2> {element.node.title} </h2>
              </div>
            ))}
          </div>
        </aside>
      </WrapperBlog>
    </Container>
  )
}

export default BlogPost
