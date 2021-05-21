/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faFacebookMessenger, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import styles from './contact2.module.css'
import styled from 'styled-components'
import {RiMessengerLine} from '@react-icons/all-files/ri/RiMessengerLine'
import {IoIosCloseCircle} from '@react-icons/all-files/io/IoIosCloseCircle'
import cross from '../images/remove.png'

import {isBrowser} from '../lib/utils'

export const query = graphql`

  query ContacttestPageQuery {
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

const TestformPage = props => {
  return (
    <Layout>
      <section className='section level'>
        <div className='container'>
          <div className='columns is-vcentered is-centered'>
            <div className='column is-half'>
              <h1 className='is-size-2'>How to use Netlify Form and Functions to submit data to <a href='https://www.sanity.io'>Sanity.io</a></h1>
              <form name='contact' method='POST' data-netlify='true'>
                <div className='field'>
                  <label className='label'>Your Name:
                    <input className='input' type='text' name='name' />
                  </label>
                </div>
                <div className='field'>
                  <label className='label'>Your Email:
                    <input className='input' type='email' name='email' />
                  </label>
                </div>
                <div className='field'>
                  <label htmlFor='role[]' className='label'>Your Role:</label>
                  <div className='select is-multiple'>
                    <select name='role[]' multiple size='2'>
                      <option value='leader'>Leader</option>
                      <option value='follower'>Follower</option>
                    </select>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Message:
                    <textarea className='textarea' name='message' />
                  </label>
                </div>
                <div className='field'>
                  <button className='button is-primary is-medium' type='submit'>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TestformPage
