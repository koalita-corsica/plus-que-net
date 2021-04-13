import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"


import styles from './footer.module.css'

const Footer = ({}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <p> Plan du site </p>
      <p> Google Avis 5,0 ⭐⭐⭐⭐⭐ </p>
      <Link to="/mentionslegales"> Mentions Legales </Link>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebookMessenger} />
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  </div>
)

export default Footer
