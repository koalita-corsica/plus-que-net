import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

const serializers = {
  types: {
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }
  }
}

function BlogPostPreview(props) {
  console.log(props);
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.blogContain}>
        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage)).url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div className={styles.dataWrapper}>
          <span className={styles.publish}>
            Publié <span>•</span>{" "}
          </span>{" "}
          <span className={styles.date}>{format(props.publishedAt, "MMMM Do, YYYY")} </span>
        </div>
        <div className={styles.text}>
          <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <PortableText blocks={props._rawExcerpt} serializers={serializers} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
