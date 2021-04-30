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
  slidesToScroll: 1,
  arrows: true
}


const SimpleSlider = ({ data, settings }) => {  
  return (

    <React.Fragment>
      <div className={styles.root}>
        <div className={styles.titleContent}>
            <div className={styles.title}> {data.title} </div>
        </div>
      <Slider  {...settings}>
      {data.edges.map(element =>
        element.node.images.map(i =>
          <React.Fragment>
              <div key={element.id} className={styles.imgCentered}>
                <img src={i.asset.url} className={styles.imgCentered} width="565" height="450" />
            </div>
          </React.Fragment>
          ),)}
        </Slider>
      </div>
    </React.Fragment>
  )
}

export default SimpleSlider