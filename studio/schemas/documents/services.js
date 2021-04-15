export default {
    name: 'services',
    type: 'document',
    title: 'Services',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            option: {
                source: 'title'
            }
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Main image'
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
              {
                type: 'image',
              }
            ]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{type: 'block'}, {type: 'image'}]
        }
    ]
}