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

  const {data, errors} = props
  const page = data && data.page;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
    <form name="contact" method="POST" data-netlify="true">
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
