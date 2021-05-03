import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import AuthorList from './author-list'
import imgTest from '../images/test.jpg'
import { Link } from 'gatsby'
import Wrapper from './wrapper.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faDungeon } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Galerie from '../components/gallery'
import Modal from 'react-modal'
import Container from '../components/container'
import Layout from '../containers/layout'

import styles from './services.module.css'


function Services (data) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = data.data
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <React.Fragment>
    {data.data.edges.map(item =>
    <React.Fragment>
        <h1> {item.node.title} </h1>
        {item.node._rawBody && <PortableText blocks={item.node._rawBody} />}
        <button onClick={openModal} className={styles.buttonGalerie}>Voir la galerie</button>
        <Modal
          style={{overlay: {backgroundColor: "transparent"}}}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          data={data.data} 
          className={styles.galery}>
            <div className={styles.titleContent}>
              <h1 className={styles.titleService}> {item.node.title}</h1>
              <button  className={styles.buttonClose}><FontAwesomeIcon icon={faTimes} onClick={closeModal} /></button>
            </div>
          <Galerie data={data.data}/>
        </Modal>
    </React.Fragment>
    )}  
    </React.Fragment>
  );
}

export default Services

