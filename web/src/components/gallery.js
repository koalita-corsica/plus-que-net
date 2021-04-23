import React, {useState} from 'react'

import Slider from "react-slick";
import GraphQLErrorList from '../components/graphql-error-list'
import { StaticQuery, graphql } from "gatsby"

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {isBrowser} from '../lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Galerie from '../components/gallery'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './galerie.module.css'
import imgTest from '../images/test.jpg'
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


// const SimpleSlider = ({ data, settings }) => (
//       <WrapperGalery>
//             <React.Fragment>
//               {console.log(data.sanityServices.images)}
//             <div className={styles.backg}>
//               <h1> {data.sanityServices.title} </h1>
//               <Slider {...settings}>
//                 {data.sanityServices.images.map((item =>
//                 <ul>
//                   <li key={item.asset._id} className={styles.center}>
//                     <h3><img src={item.asset.url} width="676" height="348"/></h3>
//                   </li>
//                 </ul>
//                   ))}
//               </Slider>
//             </div>
//           </React.Fragment>
//       </WrapperGalery>
// )
const SimpleSlider = ({ data, settings }) => {

  
  
  const [open, setOpen] = useState(true);
  
  
  
  
  const clickHandler = () => {
    setOpen(!open);
  };
  
  
  return (
  
  
    <React.Fragment>
      <div className={styles.root}>
        <div className={styles.titleContent}>
          <div className={styles.title}>Lavage de vitre acrobatique</div>
          <button className={styles.closed} onClick={clickHandler}><FontAwesomeIcon icon={faTimes} className={styles.icon}/></button>
            {open ? "" : setOpen(!open) == false}
        </div>
        <img src={imgTest} className={styles.selectedImg}></img>
        <div className={styles.sliderContent}>
          <button className={styles.arrowLeft}><FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/></button>
          <img src={imgTest} className={styles.imgSlider}></img>
          <img src={imgTest} className={styles.imgSlider}></img>
          <img src={imgTest} className={styles.imgSlider}></img>
          <img src={imgTest} className={styles.imgSlider}></img>
          <img src={imgTest} className={styles.imgSlider}></img>
          <button className={styles.arrowRight}><FontAwesomeIcon icon={faChevronRight} className={styles.icon}/></button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default function mySimpleSlider(props) {
  
  return (
    <StaticQuery
    query={graphql`
    query ServiceQuery {
      sanityServices(slug: {current: {eq: "service1"}}) {
        title
        images {
          _key
          asset {
            url
          }
          }
        }
      }
      `}
      render={data => <SimpleSlider data={data} {...props} />}
    />
  )
}