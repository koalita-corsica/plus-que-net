import { MdFormatClear } from 'react-icons/md'

export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  icon: MdFormatClear,
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
      },
      readOnly: true
    },
    {
      name: 'icon',
      type: 'mainImage',
      title: 'Icon'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}
