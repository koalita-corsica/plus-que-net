/* eslint-disable no-unused-vars */
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'xlw4ib3d',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: true
})

exports.handler = async function (event, context, callback) {
  const {payload} = JSON.parse(event.body)
  const form = {
    _type: 'submission.form',
    title: 'Form ' + payload.data.name,
    created_at: payload.created_at,
    reason: payload.data.raison,
    name: payload.data.name,
    numero: payload.data.numero,
    mail: payload.data.mail,
    adresse: payload.data.adresse,
    message: payload.data.message,
    images: payload.data.image
  }
  client.create(form).then((res) => {
    console.log(payload)
  })
}
