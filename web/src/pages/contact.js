/* eslint-disable no-unused-vars */
import React from 'react'
import {state} from 'react'
import {graphql, Link} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faFacebookMessenger,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import styles from './contact2.module.css'
import styled from 'styled-components'
import {RiMessengerLine} from '@react-icons/all-files/ri/RiMessengerLine'
import {IoIosCloseCircle} from '@react-icons/all-files/io/IoIosCloseCircle'
import cross from '../images/remove.png'
import $ from 'jquery'

import {isBrowser} from '../lib/utils'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(slug: { current: { eq: "contact" } }) {
      id
      title
    }
  }
`

const ContactPage = (props) => {
  if (!isBrowser) {
    return
  }

  const {data, errors} = props
  const page = data && data.page
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const Button = styled.div`
    width: 3.203125vw;
    height: 6.9846678024vh;
    background-color: #f26633;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 38px;
      height: 38px;
      justify-self: left;
    }
  `

  const hiddenFileInput = React.useRef(null)
  const hiddenContact = React.useRef(null)
  const hiddenDevis = React.useRef(null)

  const handleRaisonContact = (event) => {
    hiddenContact.current.click()
    actContact()
  }

  const handleRaisonDevis = (event) => {
    hiddenDevis.current.click()
    actDevis()
  }

  const handleClick = (event) => {
    hiddenFileInput.current.click()
  }
  const prev = () => {
    var fileInput = document.getElementById('s')
    var fileList = []
    var fileListDisplay = document.getElementById('file-list-display')
    var renderFileList, sendFile
  }

  const actContact = () => {
    document.getElementById('inpContact').classList.add(styles.active)
    document.getElementById('inpDevis').classList.remove(styles.active)
    document.getElementById('DevisCheck').checked = false
    document.getElementById('ContactCheck').checked = true
  }

  const actDevis = () => {
    document.getElementById('inpDevis').classList.add(styles.active)
    document.getElementById('inpContact').classList.remove(styles.active)
    document.getElementById('ContactCheck').checked = false
    document.getElementById('DevisCheck').checked = true
  }

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <div className={styles.contactWrapper}>
          <form
            id='form'
            name='contact'
            method='POST'
            data-netlify='true'
            action='https://getform.io/f/7c4360fc-4ede-44a5-a86f-a12c6b159989'
            encType='multipart/form-data'
          >
            {typeof window !== 'undefined' &&
            window.location == 'http://localhost:8000/contact/#devis' ? (
              <>
                <input type='hidden' name='form-name' value='contact' />
                <div className={styles.container}>
                  <input
                    id='inpContact'
                    name='raison'
                    type='button'
                    className={styles.contact}
                    value='CONTACT'
                    onClick={handleRaisonContact}
                  />
                  <input
                    type='checkbox'
                    id='ContactCheck'
                    name='raison'
                    value='CONTACT'
                    ref={hiddenContact}
                    onChange={handleRaisonContact}
                    style={{display: 'none'}}
                  />
                  <Link to='/contact/#devis'>
                    <input
                      id='inpDevis'
                      name='raison'
                      type='button'
                      className={styles.active + ' ' + styles.devis}
                      value='DEMANDE DE DEVIS'
                      onClick={handleRaisonDevis}
                    />
                  </Link>
                  <input
                    type='checkbox'
                    id='DevisCheck'
                    name='raison'
                    value='DEMANDE DE DEVIS'
                    ref={hiddenDevis}
                    onChange={handleRaisonDevis}
                    style={{display: 'none'}}
                    checked
                  />

                  <div className={styles.social}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.insta}
                    />
                    <FontAwesomeIcon icon={faFacebookF} className={styles.fb} />
                    <RiMessengerLine className={styles.messenger} />
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className={styles.whatsapp}
                    />
                  </div>
                  <label htmlFor='name' className={styles.name}>
                    {' '}
                    nom prenom
                  </label>
                  <label htmlFor='numero' className={styles.tel}>
                    {' '}
                    téléphone
                  </label>
                  <label htmlFor='photo' className={styles.jointe}>
                    {' '}
                    pièces jointes{' '}
                  </label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Votre Nom Prenom'
                    className={styles.nameInput}
                  />
                  <input
                    type='number'
                    name='numero'
                    placeholder='Votre Numero'
                    className={styles.telInput}
                  />
                  <label htmlFor='mail' className={styles.mail}>
                    {' '}
                    email{' '}
                  </label>
                  <input
                    type='email'
                    name='mail'
                    placeholder='Votre mail'
                    className={styles.mailInput}
                  />
                  <label htmlFor='adresse' className={styles.adresse}>
                    {' '}
                    adresse{' '}
                  </label>
                  <input
                    type='text'
                    name='adresse'
                    placeholder='Votre Adresse'
                    className={styles.adresseInput}
                  />
                  <label htmlFor='message' className={styles.msgLabel}>
                    {' '}
                    message{' '}
                  </label>
                  <textarea
                    name='message'
                    placeholder='Votre Message'
                    rows='3'
                    className={styles.msgArea}
                  />
                  <div className={styles.imgPreviewContain}>
                    <div id='photoPreview' className={styles.imgPreview}>
                      {' '}
                    </div>
                    <Button onClick={handleClick} className={styles.addIcon}>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className={styles.add}
                        size='90x'
                      />
                    </Button>
                    <input
                      type='file'
                      ref={hiddenFileInput}
                      onChange={prev}
                      style={{display: 'none'}}
                      id='s'
                      name='file[]'
                      multiple
                    />
                  </div>
                  <button id='go' className={styles.btnEnvoyer}>
                    {' '}
                    Envoyer{' '}
                  </button>
                </div>
              </>
              ) : (
                <>
                  <input type='hidden' name='form-name' value='contact' />
                  <div className={styles.container}>
                    <input
                      id='inpContact'
                      name='raison'
                      type='button'
                      className={styles.contact + ' ' + styles.active}
                      value='CONTACT'
                      onClick={handleRaisonContact}
                    />
                    <input
                      type='checkbox'
                      id='ContactCheck'
                      name='raison'
                      value='CONTACT'
                      ref={hiddenContact}
                      onChange={handleRaisonContact}
                      style={{display: 'none'}}
                      checked
                    />
                    <Link to='/contact/#devis'>
                      <input
                        id='inpDevis'
                        name='raison'
                        type='button'
                        className={styles.devis}
                        value='DEMANDE DE DEVIS'
                        onClick={handleRaisonDevis}
                      />
                    </Link>
                    <input
                      type='checkbox'
                      id='DevisCheck'
                      name='raison'
                      value='DEMANDE DE DEVIS'
                      ref={hiddenDevis}
                      onChange={handleRaisonDevis}
                      style={{display: 'none'}}
                    />
                    <div className={styles.social}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.insta}
                      />
                      <FontAwesomeIcon icon={faFacebookF} className={styles.fb} />
                      <RiMessengerLine className={styles.messenger} />
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className={styles.whatsapp}
                      />
                    </div>
                    <label htmlFor='name' className={styles.name}>
                      {' '}
                      nom prenom
                    </label>
                    <label htmlFor='numero' className={styles.tel}>
                      {' '}
                      téléphone
                    </label>
                    <label htmlFor='photo' className={styles.jointe}>
                      {' '}
                      pièces jointes{' '}
                    </label>
                    <input
                      type='text'
                      name='name'
                      placeholder='Votre Nom Prenom'
                      className={styles.nameInput}
                    />
                    <input
                      type='number'
                      name='numero'
                      placeholder='Votre Numero'
                      className={styles.telInput}
                    />
                    <label htmlFor='mail' className={styles.mail}>
                      {' '}
                      email{' '}
                    </label>
                    <input
                      type='email'
                      name='mail'
                      placeholder='Votre mail'
                      className={styles.mailInput}
                    />
                    <label htmlFor='adresse' className={styles.adresse}>
                      {' '}
                      adresse{' '}
                    </label>
                    <input
                      type='text'
                      name='adresse'
                      placeholder='Votre Adresse'
                      className={styles.adresseInput}
                    />
                    <label htmlFor='message' className={styles.msgLabel}>
                      {' '}
                      message{' '}
                    </label>
                    <textarea
                      name='message'
                      placeholder='Votre Message'
                      rows='3'
                      className={styles.msgArea}
                    />
                    <div className={styles.imgPreviewContain}>
                      <div id='photoPreview' className={styles.imgPreview}>
                        {' '}
                      </div>
                      <Button onClick={handleClick} className={styles.addIcon}>
                        <FontAwesomeIcon
                          icon={faPlus}
                          className={styles.add}
                          size='90x'
                        />
                      </Button>
                      <input
                        type='file'
                        ref={hiddenFileInput}
                        onChange={prev}
                        style={{display: 'none'}}
                        id='s'
                        name='file[]'
                        multiple
                      />
                    </div>
                    <button id='go' className={styles.btnEnvoyer}>
                      {' '}
                      Envoyer{' '}
                    </button>
                  </div>
                </>
              )}
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
