import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import BlogPostPreview from "./blog-post-preview";
import Block from "@sanity/block-content-to-react";
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

import styles from "./blog-last-article.module.css";
import { responsiveTitle3 } from "./typography.module.css";
import urlBuilder from "@sanity/image-url";

const urlFor = (source) =>
  urlBuilder({ projectId: "xlw4ib3d", dataset: "production" }).image(source);

  const serializers = {
    types: {
      youtube: ({node}) => {
        const {url} = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} />)
      }
    }
  }

function BlogLastArticle(props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{props.title}</h2>
      {props.nodes &&
        props.nodes.map((node) => (
          <React.Fragment>
            <Link to={getBlogUrl(node.publishedAt, node.slug.current)}>
              <div key={node.id} className={styles.lastArticle}>
                <img src={urlFor(node.mainImage.asset).url()} className={styles.imgLastArticle} />
                <div className={styles.lastArticleContain}>
                  <div className={styles.dataWrapper}>
                    <span className={styles.publish}>Publié • </span>{" "}
                    <span className={styles.date}>
                      {format(node.publishedAt, "MMMM Do, YYYY")}{" "}
                    </span>
                  </div>
                  <h3 className={styles.articleTitle}> {node.title} </h3>
                  <span className={styles.description}>
                    {" "}
                    <PortableText blocks={node._rawExcerpt} serializers={serializers} />
                  </span>
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

export default BlogLastArticle;
