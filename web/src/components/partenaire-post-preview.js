import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getPartenaireUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function PartenairePostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getPartenaireUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.blogContain}>
        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
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
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default PartenairePostPreview;
