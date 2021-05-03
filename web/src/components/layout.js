import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, nav, showNav, siteTitle}) => (
  <>
    <div className={styles.wrapper}>
      <Header siteTitle={siteTitle} nav={nav} showNav={showNav} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  </>
)

export default Layout
