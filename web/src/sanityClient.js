const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'xlw4ib3d',
  dataset: 'production',
  apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
  token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true // `false` if you want to ensure fresh data
})
