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


import styles from './contact.module.css'

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
//   if (errors) {
//     return (
//       <Layout>
//         <GraphQLErrorList errors={errors} />
//       </Layout>
//     )
//   }

  return (
    // <Layout>
    //      <form name="contact" method="POST" data-netlify="true">
    //         <div class="field">
    //           <label class="label">Your Name:
    //             <input class="input" type="text" name="name" />
    //           </label>
    //         </div>
    //         <div class="field">
    //           <label class="label">Your Email:
    //             <input class="input" type="email" name="email" />
    //           </label>
    //         </div>
    //         <div class="field">
    //           <label for="role[]" class="label">Your Role:</label>
    //           <div class="select is-multiple">
    //             <select name="role[]" multiple size="2">
    //               <option value="leader">Leader</option>
    //               <option value="follower">Follower</option>
    //             </select>
    //           </div>
    //         </div>
    //         <div class="field">
    //           <label class="label">Message:
    //             <textarea class="textarea" name="message"></textarea>
    //           </label>
    //         </div>
    //         <div class="field">
    //           <button class="button is-primary is-medium" type="submit">Send</button>
    //         </div>
    //       </form>
    // </Layout>
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
            <div className={styles.contactWrapper}>
              <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className={styles.container}>
                      <div className={styles.first}>
                          <button className={styles.contact}> contact </button>
                          <button className={styles.devis}> demande de devis </button>
                          <div className={styles.social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.fb}/>
                            <FontAwesomeIcon icon={faInstagram} className={styles.insta}/>
                            <FontAwesomeIcon icon={faFacebookMessenger} className={styles.messenger}/>
                            <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp}/>
                          </div>
                      </div>
                      <div className={styles.second}>
                          <label for="name"> nom prenom</label>
                          <label for="numero"> téléphone</label>
                          <label for="photo" className={styles.jointe}> pièces jointes </label>
                          <input name="name" placeholder="Votre Nom Prenom" />
                          <input name="numero" placeholder="Votre Numero" />  
                          <input name="photo" placeholder="maphoto.jpg" /> 
                      </div>
                      <div className={styles.third}>
                        <div className={styles.mail}>
                            <label for="mail"> email </label>
                            <input name="mail" placeholder="Votre mail" />
                            <label for="adresse"> adresse </label>
                            <input name="adresse" placeholder="Votre Adresse" />
                        </div>
                        <div className={styles.msg}>
                          <label for="message"> message </label>
                          <textarea name="message" placeholder="Votre Message" rows="6"/>
                        </div>
                        <div className={styles.preview}>
                            <div className={styles.preview2}>
                                <img src="https://imgur.com/gallery/EembI94" alt="s"className={styles.imgPreview}/>
                                <button className={styles.addBtn}>+</button>
                            </div>
                            <button type="submit" className={styles.btnEnvoyer}> Envoyer! </button>  
                        </div>
                      </div>
                  </div> 
              </form>
          </div>
    </Container>
  </Layout>
)
  }

export default ContactPage


