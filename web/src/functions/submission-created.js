/* eslint-disable no-unused-vars */
const fetch = require('node-fetch')
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'xlw4ib3d',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: true
})

exports.handler = async function (event, context, callback) {
  fetch('http://localhost:8888/contact')
    .then((response) => response.text())
    .then((data) => console.log(data))
}
