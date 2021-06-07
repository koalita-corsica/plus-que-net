import { MdFilter9Plus } from 'react-icons/md'

export default {
  name: 'thematiques',
  type: 'document',
  title: 'Thematiques',
  icon: MdFilter9Plus,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      readOnly: true
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
