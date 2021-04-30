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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useForm } from "react-hook-form"
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import imgTest from '../images/test.jpg'
import styles from './contact2.module.css'

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
    return;
  }

  const {data} = props
  const page = data && data.page;


  return (
    
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
            <div className={styles.contactWrapper}>
              <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className={styles.container}>   
                    <button className={styles.contact}> contact </button>
                    <button className={styles.devis}> demande de devis </button>
                    <div className={styles.social}>
                      <FontAwesomeIcon icon={faFacebook} className={styles.fb}/>
                      <FontAwesomeIcon icon={faInstagram} className={styles.insta}/>
                      <FontAwesomeIcon icon={faFacebookMessenger} className={styles.messenger}/>
                      <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp}/>
                    </div>
                    <label for="name" className={styles.name}> nom prenom</label>
                    <label for="numero" className={styles.tel}> téléphone</label>
                    <label for="photo" className={styles.jointe}> pièces jointes </label>
                    <input name="name" placeholder="Votre Nom Prenom" className={styles.nameInput}/>
                    <input name="numero" placeholder="Votre Numero" className={styles.telInput}/>  
                    <input name="photo" placeholder="maphoto.jpg" className={styles.jointeInput}/> 
                    <label for="mail"className={styles.mail}> email </label>
                    <input name="mail" placeholder="Votre mail" className={styles.mailInput}></input>
                    <label for="adresse" className={styles.adresse}> adresse </label>
                    <input name="adresse" placeholder="Votre Adresse" className={styles.adresseInput}></input>
                    <label for="message" className={styles.msgLabel}> message </label>
                    <textarea name="message" placeholder="Votre Message" rows="6" className={styles.msgArea}></textarea>
                    <div className={styles.addItem}>
                      <div className={styles.imgPreview}><img src={imgTest} alt="s"></img></div>
                      <button className={styles.addBtn}><FontAwesomeIcon icon={faPlusSquare} className={styles.add}/></button>
                    </div>
                    <button type="submit" className={styles.btnEnvoyer}> Envoyer! </button>  
                </div> 
              </form>
          </div>
    </Container>
  </Layout>
)
  }

export default ContactPage


