/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
import {Link, StaticQuery, graphql} from 'gatsby'
import React, {useState} from 'react'

import styled from 'styled-components'
import styles from './header.module.css'

const MenuIcon = styled.div`
  display: ${({show}) => (show === false ? 'none' : 'none')};
  @media (max-width: 768px) {
    position: absolute;
    top: 2rem;
    left: ${({nav}) => (nav ? '' : '2rem')};
    right: ${({nav}) => (nav ? '2rem' : '')};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    cursor: pointer;
    z-index: 100;

    div {
      width: 1.5rem;
      height: 0.33rem;
      background: ${({nav}) => (nav ? '#f26633' : 'white')};
      border-radius: 5px;
      transform-origin: 1px;
      transition: transform 300ms;
      z-index: 900;

      :nth-child(3) {
        width: ${({nav}) => (nav ? '1.5rem' : '1rem')};
      }

      :first-child {
        transform: ${({nav}) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
      }
      :nth-child(2) {
        opacity: ${({nav}) => (nav ? '0' : '1')};
      }
      :nth-child(3) {
        transform: ${({nav}) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`
const MenuLinks = styled.nav`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  width: 100%;
  img {
    display: none;
  }
  @media (max-width: 768px) {
    text-transform: uppercase;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: ${({nav}) => (nav ? 'block' : 'none')};
    background-color: #262626;
    z-index: 90;

    ul {
      list-style-type: none;
      flex-direction: column;
    }
    li {
      margin-top: 1rem;
      margin-left: -15%;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      transition: color 300ms;
      :hover {
        color: #f26633;
      }
    }
    img {
      display: inline-block;
      margin-left: -5.5vw;
    }
  }
`

const isBrowser = typeof window !== 'undefined'

if (isBrowser) {
  var meta = document.createElement('meta')
  meta.httpEquiv = 'cache-control'
  meta.content = 'max-age=31536000'
  document.getElementsByTagName('head')[0].appendChild(meta)
}

const Header = ({nav, showNav, show, data}) => (
  <React.Fragment>
    <div className={styles.root}>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)} styles={{display: 'none'}}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <div className={styles.navBar}>
        <Link to='/'>
          {' '}
          <img
            src={data.sanitySiteSettings.mainImage.asset.url}
            width='256'
            height='169.14'
            alt='Plus-que-net'
            id='logo'
          />{' '}
        </Link>
      </div>
      <div className={styles.logo}>
        <Link to='/'>
          {' '}
          <img
            src={data.sanitySiteSettings.mainImage.asset.url}
            width='256'
            height='169.14'
            alt='Plus-que-net'
            id='logo'
          />{' '}
        </Link>
      </div>
      <MenuLinks nav={nav}>
        <Link to='/'>
          {' '}
          <img
            src={data.sanitySiteSettings.mainImage.asset.url}
            width='256'
            alt='Plus-que-net'
            id='logo'
          />{' '}
        </Link>
        <div className={styles.nav}>
          <ul>
            {data.sanitySiteSettings.menu.map((item) => (
              <React.Fragment>
                <li>
                  <Link
                    activeStyle={{color: '#F26633'}}
                    to={
                      item.page.slug.current === 'accueil' ? '/' : '/' + `${item.page.slug.current}`
                    }
                  >
                    {' '}
                    {item.page.title}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </MenuLinks>
    </div>
  </React.Fragment>
)
export default function MyHeader (props) {
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
      render={(data) => <Header data={data} {...props} />}
    />
  )
}
