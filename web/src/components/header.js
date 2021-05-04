import {Link, StaticQuery, graphql} from 'gatsby'
import React, {useState} from 'react'

import styled from 'styled-components'
import styles from './header.module.css'

const MenuIcon = styled.div`
  display: none;
@media (max-width: 450px) {
  position: fixed;
  top: 2rem;
  left: ${({nav}) => nav ? '' : '2rem'};
  right: ${({nav}) => nav ? '2rem' : ''};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
   background: transparent;
   border: none;
   cursor: pointer;
   z-index: 100;

   div {
     width: 1.5rem;
    height: .33rem;
    background: ${({nav}) => nav ? '#f26633' : 'white'};
    border-radius: 5px;
    transform-origin: 1px;
    transition: transform 300ms;
    z-index: 900;

    :first-child{
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
    }
    :nth-child(2){
      opacity: ${({nav}) => nav ? '0' : '1'}
    }
    :nth-child(3) {
      transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
}
`
const MenuLinks = styled.nav`
  display: ${({show}) => show === false ? 'none' : 'none'};
@media (max-width: 450px) {
  display: ${({nav}) => (nav ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
   display: ${({nav}) => (nav ? 'block' : 'none')};
   background-color: #262626;
   z-index: 90;

   ul {
     list-style-type: none;
  }
  li {
    margin-top: 1rem;
    margin-left: -15%;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.5rem;
    transition: color 300ms;
    :hover{
      color: #f26633;
    }
  }
}
`
const Header = ({nav, showNav, show, data}) => (
  <React.Fragment>
    <div />
    <div className={styles.root}>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <div className={styles.navBar}>
        <img src={data.sanitySiteSettings.mainImage.asset.url} width='256' alt='Plus-que-net' id='logo' />
      </div>
      <MenuLinks show={show} nav={nav}>
        <img src={data.sanitySiteSettings.mainImage.asset.url} width='256' alt='Plus-que-net' id='logo' />
        <ul>
          {data.sanitySiteSettings.menu.map(item =>
            <React.Fragment>
              <li>
                <Link to={item.page.slug.current === 'accueil' ? '/' : '/' + `${item.page.slug.current}`}> {item.page.title}</Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </MenuLinks>
      <div className={styles.logo}>
        <img src={data.sanitySiteSettings.mainImage.asset.url} width='256' alt='Plus-que-net' id='logo' />
      </div>
      <div className={styles.nav}>
        <ul>
          {data.sanitySiteSettings.menu.map(item =>
            <React.Fragment>
              <li>
                <Link to={item.page.slug.current === 'accueil' ? '/' : '/' + `${item.page.slug.current}`}> {item.page.title}</Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
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
      render={data => <Header data={data} {...props} />}
    />
  )
}
