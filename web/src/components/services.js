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



function Services (data) {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal(){
    setIsOpen(false);
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  console.log(data.title)

  return (
      <Wrapper>
        <h1> {data.data.title} </h1>
        <p> <PortableText blocks={data.data._rawBody}/> </p>
      </Wrapper>
  );
}

export default Services


{/* <Modal
isOpen={modalIsOpen}
onRequestClose={closeModal}
className={styles.galery}
data={props} >
   <button className={styles.closed} ><FontAwesomeIcon icon={faTimes} onClick={closeModal} className={styles.icon}/></button>
  <Galerie data={props}/>
</Modal> */}