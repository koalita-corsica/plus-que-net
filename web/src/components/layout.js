import React from 'react'
import Header from './header'
import Footer from "./footer";
import '../styles/layout.css'
import styles from './layout.module.css'



const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <div className={styles.wrapper} id="wrapper" >
    {window.onload = blur()}
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className={styles.content}>{children}</div>
      <Footer /> 
    </div>
  </>
)
function blur(){
  if(location.pathname == "/blog/"){
    var toto = document.getElementById("wrapper");
    // toto.id = 'wrapperBlur';
    console.log(toto); 
  }else{
    console.log("pas blog");
  }
  return 
}
export default Layout
