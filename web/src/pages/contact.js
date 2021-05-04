import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faFacebookMessenger, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import {faPlus} from '@fortawesome/free-solid-svg-icons'
import styles from './contact2.module.css'
import styled from 'styled-components'

import {isBrowser} from '../lib/utils'

export const query = graphql`

  query ContactPageQuery {
  page: sanityPage(slug: {current: {eq: "contact"}}) {
    id
    title
    authors {
      author {
        name
      }
    }
  }
}
`

const ContactPage = props => {
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
  background-color: #F26633;
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

  const handleClick = event => {
    hiddenFileInput.current.click()
  }
  const handleChange = event => {
    var prev = document.getElementById('photoPreview')

    for (let i = 0; i < event.target.files.length; i++) {
      var x = document.createElement('IMG')
      x.src = window.URL.createObjectURL(event.target.files[i])
      prev.appendChild(x)
    }
  }

  return (

    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <div className={styles.contactWrapper}>
          <form name='contact' method='POST' data-netlify='true' onSubmit='submit'>
            <input type='hidden' name='form-name' value='contact' />
            <div className={styles.container}>
              <input id='inpContact' type='button' className={styles.contact} value='CONTACT' />
              <input id='inpDevis' type='button' className={styles.devis} value='DEMANDE DE DEVIS' />
              <div className={styles.social}>
                <FontAwesomeIcon icon={faFacebook} className={styles.fb} />
                <FontAwesomeIcon icon={faInstagram} className={styles.insta} />
                <FontAwesomeIcon icon={faFacebookMessenger} className={styles.messenger} />
                <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp} />
              </div>
              <label htmlFor='name' className={styles.name}> nom prenom</label>
              <label htmlFor='numero' className={styles.tel}> téléphone</label>
              <label htmlFor='photo' className={styles.jointe}> pièces jointes </label>
              <input type='text' name='name' placeholder='Votre Nom Prenom' className={styles.nameInput} />
              <input type='number' name='numero' placeholder='Votre Numero' className={styles.telInput} />
              <label htmlFor='mail'className={styles.mail}> email </label>
              <input type='email' name='mail' placeholder='Votre mail' className={styles.mailInput} />
              <label htmlFor='adresse' className={styles.adresse}> adresse </label>
              <input type='text' name='adresse' placeholder='Votre Adresse' className={styles.adresseInput} />
              <label htmlFor='message' className={styles.msgLabel}> message </label>
              <textarea name='message' placeholder='Votre Message' rows='3' className={styles.msgArea} />
              <div className={styles.imgPreviewContain}>
                <div id='photoPreview' className={styles.imgPreview}> </div>
                <Button onClick={handleClick} className={styles.addIcon}>
                  <FontAwesomeIcon icon={faPlus} className={styles.add} size='90x' />
                </Button>
                <input type='file'
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{display: 'none'}}
                />
              </div>

              <button type='submit' className={styles.btnEnvoyer}> Envoyer! </button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
