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
  const mystyle = {
    gridArea: '1 / 2 / 2 / 3',
    backgroundColor: 'white',
    transform: 'scale(1.3)'
  }
  const [qual, setQual] = useState('service2')

  // movenment controls
  function rotateClick4 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    const ic1 = document.querySelector('.ic1')
    const ic12 = document.querySelector('.ic12')
    const ic2 = document.querySelector('.ic2')
    const ic22 = document.querySelector('.ic22')
    const ic3 = document.querySelector('.ic3')
    const ic32 = document.querySelector('.ic32')
    const ic4 = document.querySelector('.ic4')
    const ic42 = document.querySelector('.ic42')
    icons4.classList.add(styles.active)
    icons4.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3; background-color: white; transform: scale(1.3)')
    icons3.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    icons1.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons2.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    ic1.setAttribute('style', 'display: none;')
    ic12.setAttribute('style', 'display: block;')
    ic2.setAttribute('style', 'display: none;')
    ic22.setAttribute('style', 'display: block;')
    ic3.setAttribute('style', 'display: none;')
    ic32.setAttribute('style', 'display: block;')
    ic4.setAttribute('style', 'display: block;')
    ic42.setAttribute('style', 'display: none;')
    setQual('service4')
    document.getElementById('btn1').classList.remove(styles.activated)
    document.getElementById('btn2').classList.remove(styles.activated)
    document.getElementById('btn3').classList.remove(styles.activated)
    document.getElementById('btn4').classList.add(styles.activated)
  };
  function rotateClick3 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    const ic1 = document.querySelector('.ic1')
    const ic12 = document.querySelector('.ic12')
    const ic2 = document.querySelector('.ic2')
    const ic22 = document.querySelector('.ic22')
    const ic3 = document.querySelector('.ic3')
    const ic32 = document.querySelector('.ic32')
    const ic4 = document.querySelector('.ic4')
    const ic42 = document.querySelector('.ic42')
    icons3.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3; background-color: white; transform: scale(1.3);')
    icons2.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons1.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    icons4.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    ic1.setAttribute('style', 'display: none;')
    ic12.setAttribute('style', 'display: block;')
    ic2.setAttribute('style', 'display: none;')
    ic22.setAttribute('style', 'display: block;')
    ic3.setAttribute('style', 'display: block;')
    ic32.setAttribute('style', 'display: none;')
    ic4.setAttribute('style', 'display: none;')
    ic42.setAttribute('style', 'display: block;')
    setQual('service3')
    document.getElementById('btn1').classList.remove(styles.activated)
    document.getElementById('btn2').classList.remove(styles.activated)
    document.getElementById('btn3').classList.add(styles.activated)
    document.getElementById('btn4').classList.remove(styles.activated)
  };
  function rotateClick2 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    const ic1 = document.querySelector('.ic1')
    const ic12 = document.querySelector('.ic12')
    const ic2 = document.querySelector('.ic2')
    const ic22 = document.querySelector('.ic22')
    const ic3 = document.querySelector('.ic3')
    const ic32 = document.querySelector('.ic32')
    const ic4 = document.querySelector('.ic4')
    const ic42 = document.querySelector('.ic42')
    icons2.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3; background-color: white; transform: scale(1.3)')
    ic1.setAttribute('style', 'display: none;')
    ic12.setAttribute('style', 'display: block;')
    ic2.setAttribute('style', 'display: block;')
    ic22.setAttribute('style', 'display: none;')
    ic3.setAttribute('style', 'display: none;')
    ic32.setAttribute('style', 'display: block;')
    ic4.setAttribute('style', 'display: none;')
    ic42.setAttribute('style', 'display: block;')
    icons1.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    icons3.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons4.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    setQual('service2')
    document.getElementById('btn1').classList.remove(styles.activated)
    document.getElementById('btn2').classList.add(styles.activated)
    document.getElementById('btn3').classList.remove(styles.activated)
    document.getElementById('btn4').classList.remove(styles.activated)
  };
  function rotateClick1 () {
    // Variable
    const icons1 = document.querySelector('.iconContent1')
    const icons2 = document.querySelector('.iconContent2')
    const icons3 = document.querySelector('.iconContent3')
    const icons4 = document.querySelector('.iconContent4')
    const ic1 = document.querySelector('.ic1')
    const ic12 = document.querySelector('.ic12')
    const ic2 = document.querySelector('.ic2')
    const ic22 = document.querySelector('.ic22')
    const ic3 = document.querySelector('.ic3')
    const ic32 = document.querySelector('.ic32')
    const ic4 = document.querySelector('.ic4')
    const ic42 = document.querySelector('.ic42')
    icons1.setAttribute('style', 'grid-area: 1 / 2 / 2 / 3; background-color: white; transform: scale(1.3)')
    ic1.setAttribute('style', 'display: block;')
    ic12.setAttribute('style', 'display: none;')
    ic2.setAttribute('style', 'display: none;')
    ic22.setAttribute('style', 'display: block;')
    ic3.setAttribute('style', 'display: none;')
    ic32.setAttribute('style', 'display: block;')
    ic4.setAttribute('style', 'display: none;')
    ic42.setAttribute('style', 'display: block;')
    icons2.setAttribute('style', 'grid-area: 2 / 2 / 3 / 3;')
    icons4.setAttribute('style', 'grid-area: 2 / 1 / 3 / 2;')
    icons3.setAttribute('style', 'grid-area: 1 / 1 / 2 / 2;')
    setQual('service1')
    document.getElementById('btn1').classList.add(styles.activated)
    document.getElementById('btn2').classList.remove(styles.activated)
    document.getElementById('btn3').classList.remove(styles.activated)
    document.getElementById('btn4').classList.remove(styles.activated)
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
          <h1 className={styles.title}>PRESTATIONS & TARIFS </h1>
        </div>
        <Wrapper>
          <div className={styles.BlockContent}>
            <div className={styles.iconeMenu}>

              <div className={styles.iconContent1} onClick={rotateClick1} className='iconContent1' >
                <span className={styles.icone1}> <img className={styles.ic1} src={ic1} alt='' className='ic1'style={{display: 'none'}} /><img className={styles.ic12} src={ic12} alt='' className='ic12' /> </span>
              </div>
              <div className={styles.iconContent2} onClick={rotateClick2} className='iconContent2' style={mystyle}>
                <span className={styles.icone2}> <img className={styles.ic2} src={ic2} alt='' className='ic2' /><img className={styles.ic22} src={ic22} alt='' className='ic22' style={{display: 'none'}} /> </span>
              </div>
              <div className={styles.iconContent3} onClick={rotateClick3} className='iconContent3' >
                <span className={styles.icone3}> <img className={styles.ic3} src={ic3} alt='' className='ic3' style={{display: 'none'}} /><img className={styles.ic32} src={ic32} alt='' className='ic32' /> </span>
              </div>
              <div className={styles.iconContent4} onClick={rotateClick4} className='iconContent4' >
                <span className={styles.icone4}> <img className={styles.ic4} src={ic4} alt='' className='ic4' style={{display: 'none'}} /><img className={styles.ic42} src={ic42} alt='' className='ic42' /> </span>
              </div>
            </div>
            <div className={styles.contenu}>
              {qual === 'service1' && <Service data={service1} /> }
              {qual === 'service2' && <Service data={service2} /> }
              {qual === 'service3' && <Service data={service3} /> }
              {qual === 'service4' && <Service data={service4} /> }
            </div>
          </div>
          <div className={styles.btnBlanc}>
            <div id='btn1' className={styles.btn1} onClick={rotateClick1} />
            <div id='btn2' className={styles.btn2} onClick={rotateClick2} />
            <div id='btn3' className={styles.btn3} onClick={rotateClick3} />
            <div id='btn4' className={styles.btn4} onClick={rotateClick4} />
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default PrestationPage
