import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import AuthorList from './author-list'
import imgTest from '../images/test.jpg'
import {Link} from 'gatsby'
import Wrapper from './wrapper.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCity, faBrush, faShower, faDungeon, faTimes} from '@fortawesome/free-solid-svg-icons'

import Galerie from '../components/gallery'
import Modal from 'react-modal'
import Container from '../components/container'
import Layout from '../containers/layout'

import styles from './services.module.css'

function Services (data) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = data.data
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal () {
    document.getElementById('desc').setAttribute('style', 'display: none;')
    document.getElementById('title').setAttribute('style', 'display: none;')
    document.getElementById('buttonGalerie').setAttribute('style', 'display: none;')
    setIsOpen(true)
  }

  function closeModal () {
    document.getElementById('desc').setAttribute('style', 'display: block;')
    document.getElementById('title').setAttribute('style', 'display: block;')
    document.getElementById('buttonGalerie').setAttribute('style', 'display: block;')
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      {data.data.edges.map(item =>
        <React.Fragment>
          <div className={styles.title} id='title'> <h1> {item.node.title} </h1> </div>
          <div className={styles.desc} id='desc'>
            {item.node._rawBody && <PortableText blocks={item.node._rawBody} />}
          </div>
          <button onClick={openModal} className={styles.buttonGalerie} id='buttonGalerie'>Voir la galerie</button>
          <Modal
            style={{overlay: {backgroundColor: 'transparent'}}}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            data={data.data}
            className={styles.galery}>
            <div className={styles.titleContent}>
              <button className={styles.buttonClose}><FontAwesomeIcon icon={faTimes} onClick={closeModal} /></button>
              <h1 className={styles.titleService}> {item.node.title}</h1>
            </div>
            <Galerie data={data.data} />
          </Modal>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Services
