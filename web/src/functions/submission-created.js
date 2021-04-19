const sanityClient = require("@sanity/client")
const client = sanityClient({
  projectId: 'xlw4ib3d',
  dataset: 'production',
  token: 'skNVUTpttzNTGl5X66WrNGkzaXpxOB01XUr7JuAvUgk0xiiiFgoAtPZeKdlmk0LEDsB2Ykqo2qYut35ryzbt2g7RJPQ1E9sAlhO25Dyi4NIkg1pBB9YSWosc8UXF25PweVrX24ivGTh4q2T07qSKC7G2AKB61Niu5ORz2PLV1PSqzarfChzr',
  useCDN: false,
})

exports.handler = async function (event, context, callback) {
  // Pulling out the payload from the body
  const { payload } = JSON.parse(event.body)

  // Checking which form has been submitted
  const isContactForm = payload.data.formId === "contact-form"

  // Build the document JSON and submit it to SANITY
  if (isContactForm) {
    const contact = {
      _type: "contact",
      name: payload.data.name,
      email: payload.data.email,
      message: payload.data.message,
    }

    const result = await client.create(contact).catch((err) => console.log(err))
  }

  callback(null, {
    statusCode: 200,
  })
}