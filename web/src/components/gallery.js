import React, { Component } from "react";
import Slider from "react-slick";
import GraphQLErrorList from '../components/graphql-error-list'
import { StaticQuery, graphql } from "gatsby"


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './galerie.module.css'
import Wrapper from "./wrapper";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



const SimpleSlider = ({ data, settings }) => (

      <Wrapper>
            <React.Fragment>
              {console.log(data.sanityServices.images)}
            <div className={styles.backg}>
              <h1> {data.sanityServices.title} </h1>
              <Slider {...settings}>
                {data.sanityServices.images.map((item =>
                <ul>
                  <li key={item.asset._id} className={styles.center}>
                    <h3><img src={item.asset.url} width="676" height="348"/></h3>
                  </li>
                </ul>
                  ))}
              </Slider>
            </div>
          </React.Fragment>
      </Wrapper>
)

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