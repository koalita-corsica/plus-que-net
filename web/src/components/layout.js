import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, show,  nav, showNav, siteTitle}) => (
  <>
    <div className={styles.wrapper}>
      <Header siteTitle={siteTitle} show={show} nav={nav} showNav={showNav} className={styles.header}/>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  </>
)

export default Layout
