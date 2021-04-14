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
            name: 'image',
            type: 'image',
            title: 'Images'
        },
        {
            name: 'text',
            type: 'bodyPortableText',
            title: 'Texte Principal'
        }
    ]
}