import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import { StaticQuery, graphql } from "gatsby"
import {cn} from '../lib/helpers'
import logo from '../images/logo.png'

import styles from './header.module.css'


const Header = ({onHideNav, onShowNav, showNav, data}) => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <img src={data.sanitySiteSettings.mainImage.asset.url} width="256"  alt="Plus-que-net" id="logo"/>
    </div>
    <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
    </button>
    <div className={styles.nav}>
      <ul>
        {data.sanitySiteSettings.menu.map((item =>
        <React.Fragment>
        <li> 
          <Link to={item.page.slug.current == "accueil" ? '/' : '/' + `${item.page.slug.current}` }> {item.page.title}</Link>
        </li>
        </React.Fragment>
      ))}
      </ul>
    </div>
  </div>
)


export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
      query HeadingQuery {
        sanitySiteSettings {
          title
          mainImage {
            asset {
              url
            }
          }
          menu {
            page {
              title
              slug {
                current
              }
            }
          }
        }
      }
      `}
      render={data => <Header data={data} {...props} />}
    />
  )
}