import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Wrapper from "../components/wrapper";
import styles from "../pages/index.module.css";
import Block from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import PortableText from "../components/portableText";
import homeImg from "../images/home.png";

import { isBrowser } from "../lib/utils";

export const query = graphql`
  query IndexPageQuery {
    page: sanityPage(slug: { current: { eq: "accueil" } }) {
      id
      title
      _rawBody
      image {
        asset {
          url
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  if (!isBrowser) {
    return;
  }

  const { data, errors } = props;
  const page = data && data.page;

  const urlFor = (source) =>
    urlBuilder({ projectId: "og13jxpg", dataset: "production" }).image(source);

  const serializer = {
    types: {
      mainImage: (props) => (
        <figure>
          <img data-src={urlFor(props.node.asset).width(600).url()} alt={props.node.alt} />

          <figcaption>{props.node.caption}</figcaption>
        </figure>
      ),
    },
  };

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <img className={styles.aside} src={homeImg} alt="men" />
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>
            Entreprise de lavage <span> de vitres & garde-corps </span>{" "}
          </h1>
        </div>
        <div className={styles.BlockContent}>
          <div className={styles.bloc1}>
            <PortableText serializers={serializer} blocks={page._rawBody} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
