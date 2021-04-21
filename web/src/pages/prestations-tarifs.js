import React, {useState} from 'react'
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
import Block from '@sanity/block-content-to-react'
import Wrapper from '../components/wrapper'
import styles from '../pages/tarif.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faDungeon } from '@fortawesome/free-solid-svg-icons'
import Galerie from '../components/gallery'

import {isBrowser} from '../lib/utils'



export const query = graphql`
  query PrestationsPageQuery {
  services: allSanityServices {
    nodes {
      id
      _rawBody
      title
      mainImage {
        asset {
          url
        }
        alt
      }
      images{
        _key
        asset {
          _id
          assetId
          _key
            url
        }
      }
    }
  }
  service: sanityServices(slug: {current: {eq: "service1"}}) {
    title
     images{
       asset {
           url
       }
     }
   }
}
`


const PrestationPage = props => {
  if (!isBrowser) {
    return;
  }

  const [open, setOpen] = useState(true);

  const clickHandler = () => {
    setOpen(!open);
  };


  const {data, errors} = props
  const page = data && data.services;
  const service = data && data.service;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  
  return (
    
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>Prestation & Tarifs</h1>
        </div>
        <Wrapper>
          <div className={styles.BlockContent}>
            <div className={styles.menuContent}>
              <div className={styles.iconeMenu}>
                <div className={styles.iconContent1} onClick={rotateClick1} class="iconContent1">
                  <span className={styles.icone1}><FontAwesomeIcon icon={faCity} className={styles.icon}/></span>
                  </div>
                <div className={styles.iconContent2} onClick={rotateClick2} class="iconContent2">
                  <span className={styles.icone2}><FontAwesomeIcon icon={faBrush} className={styles.icon}/></span>
                </div>
                <div className={styles.iconContent3} onClick={rotateClick3} class="iconContent3">
                  <span className={styles.icone3}><FontAwesomeIcon icon={faShower} className={styles.icon}/></span>
                </div>
                <div className={styles.iconContent4} onClick={rotateClick4} class="iconContent4">
                  <span className={styles.icone4}><FontAwesomeIcon icon={faDungeon} className={styles.icon}/></span>
                </div>
              </div>
              <div className={styles.titleMenu}>
                <h2 className={styles.title}>Lavage de vitres simples</h2>
              </div>
            </div>
            <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <button className={styles.button} onClick={clickHandler}>Voir la galerie</button>
            {open ? "" : <Galerie />}
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
  
}

export default PrestationPage
