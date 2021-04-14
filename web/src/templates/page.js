import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Author from "../components/author";
import Page from "../components/page";

export const query = graphql`
query PageQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      title
      parent {
        id
      }
      text {
        sanityChildren {
          text
        }
      }
    }
  }
  
  
`;

const PageTemplate = props => {
  const { data, errors } = props;
  const page = data && data.page;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {author && <SEO title={page.title || "Untitled"} />}
    
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {page && <Page {...page} />}
    </Layout>
  );
};

export default PageTemplate;
