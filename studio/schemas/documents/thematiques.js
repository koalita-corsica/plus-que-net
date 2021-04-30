export default {
    name: 'thematiques',
    type: 'document',
    title: 'Thematiques',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'string',
        title: 'Slug'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      }
    ]
  }
  