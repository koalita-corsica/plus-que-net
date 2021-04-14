const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

async function createSitePages (graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const {createPage} = actions
  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`{
      allSanityPage {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors

  // Let‘s gracefully handle if allSanityCatgogy is null
  const categoryNodes = (result.data.allSanityPage || {}).nodes || []

  categoryNodes
    // Loop through the category nodes, but don't return anything
    .forEach((node) => {
      // Desctructure the id and slug fields for each category
      const {id, slug = {}} = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return

      // Make the URL with the current slug
      const path = `/${slug.current}`

      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: require.resolve('./src/templates/page.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
  await createSitePages(graphql, actions)
}
