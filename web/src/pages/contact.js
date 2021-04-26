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


const { register, handleSubmit, errors, reset } = useForm()

// Transforms the form data from the React Hook Form output to a format Netlify can read
const encode = (data) => {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&")
}

// Handles the post process to Netlify so we can access their serverless functions
const handlePost = (formData, event) => {
  fetch(`/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact-form", ...formData }),
  })
    .then((response) => {
      navigate("/success/")
      reset()
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  event.preventDefault()
}
  return (
    <Layout>
<form
      onSubmit={handleSubmit(handlePost)}
      name="contact-form"
      method="POST"
      action="/success/"
      data-netlify="true"
      netlify-honeypot="got-ya"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input
        type="hidden"
        name="formId"
        value="contact-form"
        ref={register()}
      />
      <label htmlFor="name">
        <p>Name</p>
        {errors.name && <span>Error message</span>}
        <input name="name" ref={register({ required: true })} />
      </label>
      <label htmlFor="email">
        <p>Email</p>
        {errors.email && <span>Please format email correctly</span>}
        <input
          name="email"
          ref={register({
            required: true,
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          })}
        />
      </label>
      <label htmlFor="message">
        <p>Message</p>
        <textarea rows="4" name="message" ref={register()} />
      </label>
      <label
        htmlFor="got-ya"
        style={{
          position: "absolute",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0",
          border: "0",
        }}
      >
        Don’t fill this out if you're human:
        <input tabIndex="-1" name="got-ya" ref={register()} />
      </label>
      <div>
        <button type="submit">Submit</button>
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