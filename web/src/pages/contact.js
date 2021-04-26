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
import WrapperContact from '../components/wrapperContact'

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
    <Layout>
         <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
           <input type="hidden" name="form-name" value="contact" />
            <div class="field">
              <label class="label">Your Name:
                <input class="input" type="text" name="name" />
              </label>
            </div>
            <div class="field">
              <label class="label">Your Email:
                <input class="input" type="email" name="email" />
              </label>
            </div>
            <div class="field">
              <label for="role[]" class="label">Your Role:</label>
              <div class="select is-multiple">
                <select name="role[]" multiple size="2">
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Message:
                <textarea class="textarea" name="message"></textarea>
              </label>
            </div>
            <div class="field">
              <button class="button is-primary is-medium" type="submit">Send</button>
            </div>
          </form>
    </Layout>
)
  }

export default ContactPage


    // <Layout>
    //   <Container>
    //       <wrapperContact>
    //         <div className={styles.contactWrapper}>
    //             <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
    //                 <input type="hidden" name="form-name" value="contact" />
    //                 <div className={styles.title}>
    //                     <h1> {page.title} </h1>
    //                 </div>
    //                 <div className={styles.container}>
    //                     <div className={styles.first}>
    //                         <button> CONTACT </button>
    //                         <button> DEMANDE DEVIS </button>
    //                         <a><FontAwesomeIcon icon={faFacebook} className={styles.fb}/></a>
    //                         <a><FontAwesomeIcon icon={faInstagram} className={styles.insta}/></a>
    //                         <a><FontAwesomeIcon icon={faFacebookMessenger} className={styles.messenger}/></a>
    //                         <a><FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp}/></a>
    //                     </div>
    //                     <div className={styles.second}>
    //                         <label for="name"> NOM PRENOM</label>
    //                         <label for="numero"> TELEPHONE</label>
    //                         <label for="photo"> PIECES JOINTES </label>
    //                     </div>
    //                     <div className={styles.third}>
    //                         <input name="name" placeholder="Votre Nom Prenom" />
    //                         <input name="numero" placeholder="Votre Numero" />  
    //                         <input name="photo" placeholder="maphoto.jpg" /> 
    //                     </div>
    //                     <div className={styles.fourth}>
    //                         <label for="mail"> MAIL </label>
    //                         <label for="message"> MESSAGE </label>
    //                     </div>
    //                     <div className={styles.five}>
    //                         <textarea name="message" placeholder="Votre Message" rows="6"/>
    //                     </div>
    //                     <div className={styles.mailinp}>
    //                         <input name="mail" placeholder="Votre mail" />
    //                     </div>
    //                     <div className={styles.sixth}>
    //                         <label for="adresse"> VOTRE ADRESSE </label>
    //                         <input name="adresse" placeholder="Votre Adresse" />
    //                     </div>
    //                     <div className={styles.seventh}>
    //                         <img src="https://imgur.com/gallery/EembI94" alt="s" width="41" height="41"/>
    //                         <button className={styles.addBtn}> + </button>
    //                     </div>
    //                     <div className={styles.confirm}>
    //                         <button type="submit" className={styles.btnEnvoyer}> Envoyer! </button>
    //                     </div>
    //                 </div> 
    //             </form>
    //         </div>
    //     </wrapperContact>
    //   </Container>
    // </Layout>