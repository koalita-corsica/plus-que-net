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
import Block from '@sanity/block-content-to-react'
import Galerie from '../components/galerie';
import Wrapper from '../components/wrapper'
import styles from '../pages/tarif.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faDungeon } from '@fortawesome/free-solid-svg-icons'





export const query = graphql`
  query PrestationsPageQuery {
  services: allSanityServices {
    nodes {
      _rawBody
      title
      mainImage {
        asset {
          url
        }
        alt
      }
      images {
        asset {
          url
        }
      }
    }
  }
  service: sanityServices(slug: {current: {eq: "service1"}}) {
    title
     images{
       asset {
         fluid {
           src
         }
       }
     }
   }
}

`

const PrestationPage = props => {
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
                <div className={styles.icone}><FontAwesomeIcon icon={faCity} className={styles.icon}/></div>
                <div className={styles.icone}><FontAwesomeIcon icon={faBrush} className={styles.icon}/></div>
                <div className={styles.icone}><FontAwesomeIcon icon={faShower} className={styles.icon}/></div>
                <div className={styles.icone}><FontAwesomeIcon icon={faDungeon} className={styles.icon}/></div>
              </div>
              <div className={styles.titleMenu}>
                <h2 className={styles.title}>Lavage de vitres simples</h2>
              </div>
            </div>
            <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <button className={styles.button}>Voir la galerie</button>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default PrestationPage
