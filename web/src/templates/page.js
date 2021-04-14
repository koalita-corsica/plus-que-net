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
      image {
        asset {
          url
        }
      }
      authors {
        author {
          name
        }
      }
      publishedAt
    }
  }
`
const PageTemplate = props => {
  const {data = {}, errors} = props
  const {dados} = data.page
  const {title, image, authors, publishedAt} = data.page || {}

  return (
    <Layout>
      <Container>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.page && <p>No category data</p>}
        <SEO title={title} />
        <article>
          <h1>Page: {title}</h1>
          <img src={image.asset.url} alt="" width="100" height="100"></img>
          <p> {authors.author}</p>
          <p> {publishedAt} </p>
        </article>
      </Container>
    </Layout>
  )
}

export default PageTemplate