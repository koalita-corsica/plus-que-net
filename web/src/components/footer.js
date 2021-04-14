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
    <p className={styles.plan}> Plan du site </p>
    <div className={styles.space}> </div>
    <p className={styles.google}> Google avis 5,0 ⭐⭐⭐⭐⭐ </p>
    <Link to="/mentionslegales" className={styles.link}> Mentions Legales </Link>
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faFacebook} className={styles.fb}/>
      <FontAwesomeIcon icon={faInstagram} className={styles.insta}/>
      <FontAwesomeIcon icon={faFacebookMessenger} className={styles.messenger}/>
      <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp}/>
    </div>
  </div>
)

export default Footer
