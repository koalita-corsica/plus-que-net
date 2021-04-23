const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'zv292tg5',
  dataset: 'production',
  token: 'skNVUTpttzNTGl5X66WrNGkzaXpxOB01XUr7JuAvUgk0xiiiFgoAtPZeKdlmk0LEDsB2Ykqo2qYut35ryzbt2g7RJPQ1E9sAlhO25Dyi4NIkg1pBB9YSWosc8UXF25PweVrX24ivGTh4q2T07qSKC7G2AKB61Niu5ORz2PLV1PSqzarfChzr'
})

exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body)
  const result = await client.create({ _type: 'submission.form', ...payload })
  callback(null, {
    statusCode: 200
  })
}