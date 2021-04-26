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
import Wrapper from '../components/wrapper'
import styles from '../pages/tarif.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faDungeon } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Galerie from '../components/gallery'
import Block from '@sanity/block-content-to-react'

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
  service: sanityServices(slug: { current: { ne: null } }) {
    title
    _rawBody
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


   //movenment controls
   function rotateClick4() {
    //Variable
    const icons1 = document.querySelector('.iconContent1');
    const icons2 = document.querySelector('.iconContent2');
    const icons3 = document.querySelector('.iconContent3');
    const icons4 = document.querySelector('.iconContent4');
    icons4.setAttribute("style", 'grid-area: 1 / 2 / 2 / 3;');
    icons3.setAttribute("style", 'grid-area: 2 / 2 / 3 / 3;');
    icons1.setAttribute("style", 'grid-area: 2 / 1 / 3 / 2;');
    icons2.setAttribute("style", 'grid-area: 1 / 1 / 2 / 2;');
  };
  function rotateClick3() {
    //Variable
    const icons1 = document.querySelector('.iconContent1');
    const icons2 = document.querySelector('.iconContent2');
    const icons3 = document.querySelector('.iconContent3');
    const icons4 = document.querySelector('.iconContent4');
    icons3.setAttribute("style", 'grid-area: 1 / 2 / 2 / 3;' );
    icons2.setAttribute("style", 'grid-area: 2 / 1 / 3 / 2;' );
    icons1.setAttribute("style", 'grid-area: 2 / 2 / 3 / 3;' );
    icons4.setAttribute("style", 'grid-area: 1 / 1 / 2 / 2;' );
  };
  function rotateClick2() {
    //Variable
    const icons1 = document.querySelector('.iconContent1');
    const icons2 = document.querySelector('.iconContent2');
    const icons3 = document.querySelector('.iconContent3');
    const icons4 = document.querySelector('.iconContent4');
    icons2.setAttribute("style", 'grid-area: 1 / 2 / 2 / 3;' );
    icons1.setAttribute("style", 'grid-area: 1 / 1 / 2 / 2;' );
    icons3.setAttribute("style", 'grid-area: 2 / 1 / 3 / 2;' );
    icons4.setAttribute("style", 'grid-area: 2 / 2 / 3 / 3;' );
  };
  function rotateClick1() {
    //Variable
    const icons1 = document.querySelector('.iconContent1');
    const icons2 = document.querySelector('.iconContent2');
    const icons3 = document.querySelector('.iconContent3');
    const icons4 = document.querySelector('.iconContent4');
    icons1.setAttribute("style", 'grid-area: 1 / 2 / 2 / 3;' );
    icons2.setAttribute("style", 'grid-area: 2 / 2 / 3 / 3;' );
    icons4.setAttribute("style", 'grid-area: 2 / 1 / 3 / 2;' );
    icons3.setAttribute("style", 'grid-area: 1 / 1 / 2 / 2;' );
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
                <h2 className={styles.title}> {service.title} </h2>
              </div>
            </div>
            <div className={styles.description}> <Block blocks={service._rawBody} /> </div>
          </div>
        </Wrapper>
        <button className={styles.button} onClick={clickHandler}>Voir la galerie</button>
          {open ? "" : <div className={styles.galery}><Galerie /></div>}
      </Container>
    </Layout>
  )
  
}

export default PrestationPage
