import { AiOutlineVideoCameraAdd } from 'react-icons/ai'

export default {
  title: 'Video blog post',
  name: 'videoBlogPost',
  type: 'object',
  icon: AiOutlineVideoCameraAdd,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video'
    }
  ]
}
