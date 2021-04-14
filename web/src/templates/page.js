import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      title
    }
  }
`
const PageTemplate = props => {
  const {data = {}, errors} = props
  const {title, description} = data.page || {}

  return (
    <Layout>
      <Container>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.page && <p>No category data</p>}
        <SEO title={title} />
        <article>
          <h1>Page: {title}</h1>
          <p> {title} </p>
        </article>
      </Container>
    </Layout>
  )
}

export default PageTemplate