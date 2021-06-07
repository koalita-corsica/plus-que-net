import React, { useState } from "react";

import Slider from "react-slick";
import GraphQLErrorList from "../components/graphql-error-list";
import { StaticQuery, graphql } from "gatsby";

import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { isBrowser } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Galerie from "../components/gallery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./galerie.module.css";
import imgTest from "../images/test.jpg";
import urlBuilder from "@sanity/image-url";

const urlFor = (source) =>
  urlBuilder({ projectId: "xlw4ib3d", dataset: "production" }).image(source);

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  dots: true,
};

const SimpleSlider = ({ data }) => {
  return (
    <React.Fragment>
      <div className={styles.root}>
        <div className={styles.titleContent}>
          <div className={styles.title}> {data.title} </div>
        </div>
        <Slider {...settings}>
          {data.edges.map((element) =>
            element.node.images.map((i) => (
              <React.Fragment>
                <div key={element.id} className={styles.imgCentered}>
                  <img src={urlFor(i.asset).url()} alt="sss" className={styles.selectedImg} />
                </div>
              </React.Fragment>
            ))
          )}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default SimpleSlider;
