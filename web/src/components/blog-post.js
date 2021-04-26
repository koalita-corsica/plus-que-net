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
            <div className={styles.path}>Tous les Articles {'>'}  </div>
            <div className={styles.articleTitle}> {props.title}</div>
          </div>
          <img src={imgTest} className={styles.imgArticle}></img>
          <p className={styles.publish}>Publié 23 juin 2020</p>
          <h3 className={styles.subtitle}>LOREM IPSUM DOLOR SIT AMET, CONSETETUR</h3>
          <div className={styles.paraWrapper}>
            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img src={imgTest} className={styles.imgPara}></img>
            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>  
        <aside className={styles.aside}>
          <h3 className={styles.categorieTitle} >Thématique</h3>
          <div className={styles.catWrapper}>
            <div className={styles.categorie}>
              <img src={imgTest} className={styles.imgTheme}></img>
              <h2>Thèmes</h2>
            </div>
            <div className={styles.categorie}>
              <img src={imgTest} className={styles.imgTheme}></img>
              <h2>Thèmes</h2>
            </div>
            <div className={styles.categorie}>
              <img src={imgTest} className={styles.imgTheme}></img>
              <h2>Thèmes</h2>
            </div>
          </div>
        </aside>
      </WrapperBlog>
    </Container>
  );
}

export default BlogPost