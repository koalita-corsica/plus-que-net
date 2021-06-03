export default {
  name: 'submission.form',
  type: 'document',
  title: 'Form submission',
  readOnly: true,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created at'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'reason',
      type: 'string',
      title: 'Raison'
    },
    {
      name: 'numero',
      type: 'string',
      title: 'Numero'
    },
    {
      name: 'mail',
      type: 'string',
      title: 'Mail'
    },
    {
      name: 'adresse',
      type: 'string',
      title: 'Adresse'
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}]
    }
  ]
}
