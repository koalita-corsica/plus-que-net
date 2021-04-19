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

    // Initiate forms
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
      fetch(`/contact`, {
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

  const {data} = props
  const page = data && data.page;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
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
    />
    <label htmlFor="name">
      <p>Name</p>
      <input name="name" />
    </label>
    <label htmlFor="email">
      <p>Email</p>
      <input
        name="email"
      />
    </label>
    <label htmlFor="message">
      <p>Message</p>
      <textarea rows="4" name="message" />
    </label>
    <label
      htmlFor="got-ya"
    >
      Don’t fill this out if you're human:
      <input tabIndex="-1" name="got-ya" />
    </label>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
)
  }

export default ContactPage
