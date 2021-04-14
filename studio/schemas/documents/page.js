export default {
    name: 'page',
    type: 'document',
    title: 'Page',
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
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
              {
                type: 'authorReference'
              }
            ]
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image'
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            description: 'This can be used to schedule post for publishing'
        },
        {
            name: 'body',
            type: 'bodyPortableText',
            title: 'Body'
        }
    ]
}