import React, { useState, useEffect } from "react";
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
import WrapperBlog from "../components/wrapperBlog";
import styles from "../pages/partenaire.module.css";
import imgTest from "../images/test.jpg";
import PartenaireLastArticle from "../components/partenaires-last-article";
import PartenairePostPreviewGrid from "../components/partenaire-post-preview-grid";
import { BiUpArrowCircle } from "@react-icons/all-files/bi/BiUpArrowCircle";
import { Link } from "gatsby";

import { isBrowser } from "../lib/utils";

export const query = graphql`
  query PartenairesPageQuery {
    page: sanityPage(slug: { current: { eq: "partenaires" } }) {
      id
      title
    }
    partenaires: allSanityPartenaire(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      skip: 1
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
              url
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    lastPartenaire: allSanityPartenaire(
      sort: { fields: publishedAt, order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      limit: 1
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
              url
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const PartenairesPage = (props) => {
  if (!isBrowser) {
    return;
  }
  const { data, errors } = props;
  const page = data && data.page;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.partenaires && mapEdgesToNodes(data.partenaires);
  const lastNodes = data && data.lastPartenaire && mapEdgesToNodes(data.lastPartenaire);

  const [list, setList] = useState([...postNodes.slice(0, 4)]);

  const [hasMore, setHasMore] = useState(postNodes.length > 4);

  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < postNodes.length;
      const nextResults = isMore ? postNodes.slice(currentLength, currentLength + 4) : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  useEffect(() => {
    const isMore = list.length < postNodes.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>{page.title}</h1>
        </div>
        <WrapperBlog>
          <div className={styles.blogContain}>
            <div className={styles.lastArticle}>
              <PartenaireLastArticle nodes={lastNodes} />
            </div>
            <div className={styles.article}>
              {postNodes && postNodes.length > 0 && <PartenairePostPreviewGrid nodes={postNodes} />}
            </div>
          </div>
        </WrapperBlog>
        {hasMore ? (
          <button className={styles.btnSeeMore} onClick={handleLoadMore}>
            {" "}
            VOIR PLUS D'ARTICLES{" "}
          </button>
        ) : (
          <div className={styles.mySpace} />
        )}
        <div className={styles.end}>
          <Link to="/partenaires">
            {" "}
            <BiUpArrowCircle /> <span> Retour haut de page </span>{" "}
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default PartenairesPage;
