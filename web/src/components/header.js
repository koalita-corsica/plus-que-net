import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <img src="https://drive.google.com/file/d/1htYVOZQwr7arnRZveyT4zZhj2YhFwysE/view?ts=60759839" alt="Plus-que-net" id="logo"/>
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
          <Link to='/tarifs/'>Prestations e Tarifs</Link>
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