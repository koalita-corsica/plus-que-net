/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState} from 'react'
import {graphql, Link} from 'gatsby'
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCity, faBrush, faShower, faDungeon, faTimes} from '@fortawesome/free-solid-svg-icons'

import Galerie from '../components/gallery'
import Block from '@sanity/block-content-to-react'
import Modal from 'react-modal'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imgTest from '../images/test.jpg'
import Service from '../components/services'
import ic1 from '../images/barrier.png'
import ic12 from '../images/barrier2.png'
import ic2 from '../images/carrycot.png'
import ic22 from '../images/carrycot2.png'
import ic3 from '../images/Window.png'
import ic32 from '../images/Window2.png'
import ic4 from '../images/window_cleaner.png'
import ic42 from '../images/window_cleaner2.png'

import {isBrowser} from '../lib/utils'

export const query = graphql`
  query PrestationsPageQuery {
  services: allSanityServices {
    nodes {
      id
      _rawBody
      title
      icon {
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
  service1: allSanityServices(filter: {slug: {current: {eq: "service1"}}}) {
    edges {
      node {
        _id
        id
        title
        _rawBody
        images {
          asset {
            _id
            id
            url
          }
        }
      }
    }
   }
   service2: allSanityServices(filter: {slug: {current: {eq: "service2"}}}) {
    edges {
      node {
        _id
        id
        title
        _rawBody
        images {
          asset {
            _id
            id
            url
          }
        }
      }
    }
   }
   service3: allSanityServices(filter: {slug: {current: {eq: "service3"}}}) {
    edges {
      node {
        _id
        id
        title
        _rawBody
        images {
          asset {
            _id
            id
            url
          }
        }
      }
    }
   }
   service4: allSanityServices(filter: {slug: {current: {eq: "service-4"}}}) {
    edges {
      node {
        _id
        id
        title
        _rawBody
        images {
          asset {
            _id
            id
            url
          }
        }
      }
    }
   }
}
`

const PrestationPage = props => {
  if (!isBrowser) {
    return
  }

  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const [qual, setQual] = useState('service2')

  // movenment controls
  function rotateClick4 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    icons4.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3;')
    icons3.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    icons1.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons2.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    setQual('service4')
  };
  function rotateClick3 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    icons3.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3;')
    icons2.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons1.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    icons4.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    setQual('service3')
  };
  function rotateClick2 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    icons2.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3;')
    icons1.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    icons3.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons4.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    setQual('service2')
  };
  function rotateClick1 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    icons1.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3;')
    icons2.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    icons4.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons3.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    setQual('service1')
  };

  const {data, errors} = props
  const page = data && data.services
  const service1 = data && data.service1
  const service2 = data && data.service2
  const service3 = data && data.service3
  const service4 = data && data.service4

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
          <h1 className={styles.title}>PRESTATIONS &<span> TARIFS</span> </h1>
        </div>
        <Wrapper>
          <div className={styles.BlockContent}>
            <div className={styles.iconeMenu}>

              <div className={styles.iconContent1} onClick={rotateClick1} className='iconContent1'>
                <span className={styles.icone1}> <img className={styles.ic1} src={ic1} alt='' /><img className={styles.ic12} src={ic12} alt='' /> </span>
              </div>
              <div className={styles.iconContent2} onClick={rotateClick2} className='iconContent2'>
                <span className={styles.icone2}> <img className={styles.ic2} src={ic2} alt='' /><img className={styles.ic22} src={ic22} alt='' /> </span>
              </div>
              <div className={styles.iconContent3} onClick={rotateClick3} className='iconContent3'>
                <span className={styles.icone3}> <img className={styles.ic3} src={ic3} alt='' /><img className={styles.ic32} src={ic32} alt='' /> </span>
              </div>
              <div className={styles.iconContent4} onClick={rotateClick4} className='iconContent4'>
                <span className={styles.icone4}> <img className={styles.ic4} src={ic4} alt='' /><img className={styles.ic42} src={ic42} alt='' /> </span>
              </div>
            </div>
            <div className={styles.contenu}>
              {qual === 'service1' && <Service data={service1} /> }
              {qual === 'service2' && <Service data={service2} /> }
              {qual === 'service3' && <Service data={service3} /> }
              {qual === 'service4' && <Service data={service4} /> }
            </div>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default PrestationPage
