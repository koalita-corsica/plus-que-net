/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
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
import axios from 'axios'

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
    var prev = document.getElementById('fichier1')
    var myDiv = document.createElement('div')
    myDiv.classList.add(styles.crossImg)
    var myImg = document.createElement('IMG')
    myImg.classList.add(styles.crossedImg)
    myImg.src = cross
    var fileInput = document.getElementById('fichier-1')
    var fileArray = []
    var myFiles = []

    fileArray = Array.from(fileInput.files)

    for (let i = 0; i < fileArray.length; i++) {
      var x = document.createElement('IMG')
      var src = window.URL.createObjectURL(fileArray[i])
      x.src = src
      myDiv.appendChild(x)
      myDiv.appendChild(myImg)
      prev.style.all = 'revert'
      prev.innerHTML = ''
      prev.appendChild(myDiv)
    }

    myImg.addEventListener('click', () => {
      fileInput.value = ''
      x.remove()
      myImg.remove()
      prev.innerHTML = '+'
      prev.style.color = '#F26633'
      prev.style.border = 'solid 1px #F26633'
      prev.style.borderRadius = '10px'
      prev.style.height = '2.1rem'
      prev.style.width = '2.1rem'
      prev.style.textAlign = 'center'
      prev.style.fontSize = '2rem'
      prev.style.lineHeight = '2rem'
      prev.style.padding = '0.1rem'
    })
  }

  const prev1 = () => {
    var prev = document.getElementById('fichier2')
    var myDiv = document.createElement('div')
    myDiv.classList.add(styles.crossImg)
    var myImg = document.createElement('IMG')
    myImg.classList.add(styles.crossedImg)
    myImg.src = cross
    var fileInput = document.getElementById('fichier-2')
    var fileArray = []
    var myFiles = []

    fileArray = Array.from(fileInput.files)

    for (let i = 0; i < fileArray.length; i++) {
      var x = document.createElement('IMG')
      var src = window.URL.createObjectURL(fileArray[i])
      x.src = src
      myDiv.appendChild(x)
      myDiv.appendChild(myImg)
      prev.style.all = 'revert'
      prev.innerHTML = ''
      prev.appendChild(myDiv)
    }

    myImg.addEventListener('click', () => {
      fileInput.value = ''
      x.remove()
      myImg.remove()
      prev.innerHTML = '+'
      prev.style.color = '#F26633'
      prev.style.border = 'solid 1px #F26633'
      prev.style.borderRadius = '10px'
      prev.style.height = '2.1rem'
      prev.style.width = '2.1rem'
      prev.style.textAlign = 'center'
      prev.style.fontSize = '2rem'
      prev.style.lineHeight = '2rem'
      prev.style.padding = '0.1rem'
    })
  }
  const prev2 = () => {
    var prev = document.getElementById('fichier3')
    var myDiv = document.createElement('div')
    myDiv.classList.add(styles.crossImg)
    var myImg = document.createElement('IMG')
    myImg.classList.add(styles.crossedImg)
    myImg.src = cross
    var fileInput = document.getElementById('fichier-3')
    var fileArray = []
    var myFiles = []

    fileArray = Array.from(fileInput.files)

    for (let i = 0; i < fileArray.length; i++) {
      var x = document.createElement('IMG')
      var src = window.URL.createObjectURL(fileArray[i])
      x.src = src
      myDiv.appendChild(x)
      myDiv.appendChild(myImg)
      prev.style.all = 'revert'
      prev.innerHTML = ''
      prev.appendChild(myDiv)
    }

    myImg.addEventListener('click', () => {
      fileInput.value = ''
      x.remove()
      myImg.remove()
      prev.innerHTML = '+'
      prev.style.color = '#F26633'
      prev.style.border = 'solid 1px #F26633'
      prev.style.borderRadius = '10px'
      prev.style.height = '2.1rem'
      prev.style.width = '2.1rem'
      prev.style.textAlign = 'center'
      prev.style.fontSize = '2rem'
      prev.style.lineHeight = '2rem'
      prev.style.padding = '0.1rem'
    })
  }
  const prev3 = () => {
    var prev = document.getElementById('fichier4')
    var myDiv = document.createElement('div')
    myDiv.classList.add(styles.crossImg)
    var myImg = document.createElement('IMG')
    myImg.classList.add(styles.crossedImg)
    myImg.src = cross
    var fileInput = document.getElementById('fichier-4')
    var fileArray = []
    var myFiles = []

    fileArray = Array.from(fileInput.files)

    for (let i = 0; i < fileArray.length; i++) {
      var x = document.createElement('IMG')
      var src = window.URL.createObjectURL(fileArray[i])
      x.src = src
      myDiv.appendChild(x)
      myDiv.appendChild(myImg)
      prev.style.all = 'revert'
      prev.innerHTML = ''
      prev.appendChild(myDiv)
    }

    myImg.addEventListener('click', () => {
      fileInput.value = ''
      x.remove()
      myImg.remove()
      prev.innerHTML = '+'
      prev.style.color = '#F26633'
      prev.style.border = 'solid 1px #F26633'
      prev.style.borderRadius = '10px'
      prev.style.height = '2.1rem'
      prev.style.width = '2.1rem'
      prev.style.textAlign = 'center'
      prev.style.fontSize = '2rem'
      prev.style.lineHeight = '2rem'
      prev.style.padding = '0.1rem'
    })
  }
  const prev4 = () => {
    var prev = document.getElementById('fichier5')
    var myDiv = document.createElement('div')
    myDiv.classList.add(styles.crossImg)
    var myImg = document.createElement('IMG')
    myImg.classList.add(styles.crossedImg)
    myImg.src = cross
    var fileInput = document.getElementById('fichier-5')
    var fileArray = []
    var myFiles = []

    fileArray = Array.from(fileInput.files)

    for (let i = 0; i < fileArray.length; i++) {
      var x = document.createElement('IMG')
      var src = window.URL.createObjectURL(fileArray[i])
      x.src = src
      myDiv.appendChild(x)
      myDiv.appendChild(myImg)
      prev.style.all = 'revert'
      prev.innerHTML = ''
      prev.appendChild(myDiv)
    }

    myImg.addEventListener('click', () => {
      fileInput.value = ''
      x.remove()
      myImg.remove()
      prev.innerHTML = '+'
      prev.style.color = '#F26633'
      prev.style.border = 'solid 1px #F26633'
      prev.style.borderRadius = '10px'
      prev.style.height = '2.1rem'
      prev.style.width = '2.1rem'
      prev.style.textAlign = 'center'
      prev.style.fontSize = '2rem'
      prev.style.lineHeight = '2rem'
      prev.style.padding = '0.1rem'
    })
  }

  const prev5 = () => {
    var prev = document.getElementById('fichier6')
    var myDiv = document.createElement('div')
    myDiv.classList.add(styles.crossImg)
    var myImg = document.createElement('IMG')
    myImg.classList.add(styles.crossedImg)
    myImg.src = cross
    var fileInput = document.getElementById('fichier-6')
    var fileArray = []
    var myFiles = []

    fileArray = Array.from(fileInput.files)

    for (let i = 0; i < fileArray.length; i++) {
      var x = document.createElement('IMG')
      var src = window.URL.createObjectURL(fileArray[i])
      x.src = src
      myDiv.appendChild(x)
      myDiv.appendChild(myImg)
      prev.style.all = 'revert'
      prev.innerHTML = ''
      prev.appendChild(myDiv)
    }

    myImg.addEventListener('click', () => {
      fileInput.value = ''
      x.remove()
      myImg.remove()
      prev.innerHTML = '+'
      prev.style.color = '#F26633'
      prev.style.border = 'solid 1px #F26633'
      prev.style.borderRadius = '10px'
      prev.style.height = '2.1rem'
      prev.style.width = '2.1rem'
      prev.style.textAlign = 'center'
      prev.style.fontSize = '2rem'
      prev.style.lineHeight = '2rem'
      prev.style.padding = '0.1rem'
    })
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

  // const [serverState, setServerState] = useState({
  //   submitting: false,
  //   status: null
  // })
  // const handleServerResponse = (ok, msg, form) => {
  //   setServerState({
  //     submitting: false,
  //     status: {ok, msg}
  //   })
  //   if (ok) {
  //     form.reset()
  //   }
  // }
  // const handleOnSubmit = e => {
  //   e.preventDefault()
  //   const form = e.target
  //   setServerState({submitting: true})
  //   axios({
  //     method: 'post',
  //     url: '',
  //     data: new FormData(form)
  //   })
  //     .then(r => {
  //       handleServerResponse(true, 'Thanks!', form)
  //     })
  //     .catch(r => {
  //       handleServerResponse(false, r.response.data.error, form)
  //     })
  // }

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <div className={styles.contactWrapper}>
          <form
            action='https://getform.io/f/9104b7d5-5703-45d8-9e32-81178542190f' method='POST'
            id='myForm'
            encType='multipart/form-data'
          >
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
                nom prenom
              </label>
              <label htmlFor='numero' className={styles.tel}>
                téléphone
              </label>
              <label htmlFor='photo' className={styles.jointe}>
                pièces jointes
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
                email
              </label>
              <input
                type='email'
                name='mail'
                placeholder='Votre mail'
                className={styles.mailInput}
              />
              <label htmlFor='adresse' className={styles.adresse}>
                adresse
              </label>
              <input
                type='text'
                name='adresse'
                placeholder='Votre Adresse'
                className={styles.adresseInput}
              />
              <label htmlFor='message' className={styles.msgLabel}>
                message
              </label>
              <textarea
                name='message'
                placeholder='Votre Message'
                rows='3'
                className={styles.msgArea}
              />
              <div className={styles.imgPreviewContain}>
                <div id='photoPreview' className={styles.imgPreview}>
                  <div id='imgup' className={styles.imgup}>
                    <input type='file' name='plop' id='fichier-1' className={styles.inputfile} onChange={prev} />
                    <label id='fichier1' htmlFor='fichier-1'>+</label>
                    <input type='file' name='plop1' id='fichier-2' className={styles.inputfile} onChange={prev1} />
                    <label htmlFor='fichier-2' id='fichier2'>+</label>
                    <input type='file' name='plop2' id='fichier-3' className={styles.inputfile} onChange={prev2} />
                    <label htmlFor='fichier-3' id='fichier3' >+</label>
                    <input type='file' name='plop3' id='fichier-4' className={styles.inputfile} onChange={prev3} />
                    <label htmlFor='fichier-4' id='fichier4'>+</label>
                    <input type='file' name='plop4' id='fichier-5' className={styles.inputfile} onChange={prev4} />
                    <label htmlFor='fichier-5' id='fichier5'>+</label>
                    <input type='file' name='plop5' id='fichier-6' className={styles.inputfile} onChange={prev5} />
                    <label htmlFor='fichier-6' id='fichier6'>+</label>
                  </div>
                </div>
              </div>
              <button id='go' className={styles.btnEnvoyer}>
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
