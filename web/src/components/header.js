import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import logo from '../images/logo.png'

import styles from './header.module.css'


const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <img src={logo} width="256" heigth="169" alt="Plus-que-net" id="logo"/>
    </div>
    <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger' />
    </button>
    <div className={styles.nav}>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to='/prestations-tarifs/'>Prestations e Tarifs</Link>
=======
          <Link to='/tarifs/'>Prestations & Tarifs</Link>
>>>>>>> 136fd2bf44c3608b90604fa525bb8f688ce89b22
        </li>
        <li>
          <Link to='/blog/'>Blog</Link>
        </li>
        <li>
          <Link to='/partenaires/'>Partenaires</Link>
        </li>
        <li>
          <Link to='/contact/'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
